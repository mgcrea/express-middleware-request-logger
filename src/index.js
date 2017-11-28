import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import {kebabCase} from 'lodash';
import rimraf from 'rimraf';
import mkdirp from 'mkdirp';

Promise.promisifyAll(fs);

export default function requestLoggerMiddleware({dest = './tmp/requests', clear = false} = {}) {
  // Create dest folder if missing
  if (!fs.existsSync(dest)) {
    mkdirp.sync(dest);
  }
  // Clear folder if asked to
  if (clear) {
    rimraf.sync(path.join(dest, '*'), {}, () => {});
  }
  return (req, res, next) => {
    const date = Date.now();
    const kebabCasedUrl = kebabCase(req.originalUrl).substr(0, 30);
    const method = req.method.toLowerCase();
    const {end} = res;
    res.end = (...args) => {
      fs.writeFileAsync(path.join(dest, `req-${method}-${kebabCasedUrl}-${date}-res.json`), args[0]);
      end.apply(res, args);
    };
    next();
    const headersFilepath = path.join(dest, `req-${method}-${kebabCasedUrl}-${date}-headers.json`);
    const bodyFilepath = path.join(dest, `req-${method}-${kebabCasedUrl}-${date}-body.json`);
    return Promise.all([
      fs.writeFileAsync(headersFilepath, JSON.stringify(req.headers, null, 2)),
      req._body ? fs.writeFileAsync(bodyFilepath, JSON.stringify(req.body, null, 2)) : Promise.resolve() // eslint-disable-line no-underscore-dangle
    ]);
  };
}
