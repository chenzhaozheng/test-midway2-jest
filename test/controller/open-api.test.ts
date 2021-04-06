import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';
// import { Application } from 'egg';
// import * as assert from 'assert';

describe('test/controller/open-api.test.ts', () => {
  // let app: Application;
  let app;

  beforeAll(async () => {
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  // test fun
  function add(a, b) {
    return a + b;
  }

  // describe('add function', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 1)).toEqual(2);
  });

});

// });
