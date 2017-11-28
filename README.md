# express-middleware-request-logger

[![npm version](https://img.shields.io/npm/v/express-middleware-request-logger.svg)](https://www.npmjs.com/package/express-middleware-request-logger)
[![license](https://img.shields.io/github/license/mgcrea/express-middleware-request-logger.svg?style=flat)](https://tldrlegal.com/license/mit-license)
[![build status](http://img.shields.io/travis/mgcrea/express-middleware-request-logger/master.svg?style=flat)](http://travis-ci.org/mgcrea/express-middleware-request-logger)
[![dependencies status](https://img.shields.io/david/mgcrea/express-middleware-request-logger.svg?style=flat)](https://david-dm.org/mgcrea/express-middleware-request-logger)
[![devDependencies status](https://img.shields.io/david/dev/mgcrea/express-middleware-request-logger.svg?style=flat)](https://david-dm.org/mgcrea/express-middleware-request-logger#info=devDependencies)
[![Codacy Badge_Grade](https://api.codacy.com/project/badge/Grade/99844d4bed38450f9ec9e03650d19954)](https://www.codacy.com/app/olivier_5/express-middleware-request-logger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mgcrea/express-middleware-request-logger&amp;utm_campaign=Badge_Grade) [![Codacy Badge_Coverage](https://api.codacy.com/project/badge/Coverage/99844d4bed38450f9ec9e03650d19954)](https://www.codacy.com/app/olivier_5/express-middleware-request-logger?utm_source=github.com&utm_medium=referral&utm_content=mgcrea/express-middleware-request-logger&utm_campaign=Badge_Coverage)
[![npm downloads](https://img.shields.io/npm/dm/express-middleware-request-logger.svg)](https://www.npmjs.com/package/express-middleware-request-logger)

Easily log express requests and responses.

## Quickstart

- Load the plugin inside your schema

```js
import express from 'express';
import bodyParser from 'body-parser';
import requestLogger from 'express-middleware-request-logger';

const app = express();
app.use(bodyParser.json());
app.use(requestLogger({dest: `${__dirname}/.tmp/requests`, clear: true}));
```

## Testing

- You can quickly start hacking around

```bash
git clone -o github git@github.com:mgcrea/express-middleware-request-logger.git
cd express-middleware-request-logger
npm i
npm test
```
