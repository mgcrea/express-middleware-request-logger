
import expect from 'expect';
import request from 'request-promise';
import express from 'express';
import bodyParser from 'body-parser';

import requestLogger from './../../src';

// Configuration
const host = 'http://localhost:3000';
const uri = `${host}/test`;
let server;

beforeAll(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(requestLogger({dest: `${__dirname}/../.tmp/requests`, clear: true}));
  app.all('/test', (req, res) => res.json({ok: 1}));
  return new Promise((resolve, reject) => {
    server = app.listen(3000, () => {
      resolve();
    });
  });
});

describe('requestLogger()', () => {
  it('constructor should export a function', () => {
    expect(typeof requestLogger).toBe('function');
  });
  it('should handle basic GET requests', () => (
    request({uri, json: true})
      .then((res) => {
        expect(res).toEqual({ok: 1});
      })
  ));
  it('should handle basic POST requests', () => (
    request({
      method: 'POST', uri, json: true, body: {foo: 'bar'}
    })
      .then((res) => {
        expect(res).toEqual({ok: 1});
      })
  ));
});

afterAll(() => {
  server.close();
});
