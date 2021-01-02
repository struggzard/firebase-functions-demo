import * as assert from "assert";
import {Request, Response} from "express";

const testEnv = require('firebase-functions-test')();

import {helloWorldOnRequestResponse, helloWorldOnRequest, helloWorldOnCall} from "../src";

describe("test helloWorldOnCall", () => {
    it("result should match 'Hello from Firebase!'", (done) => {
        const args = {};
        testEnv.wrap(helloWorldOnCall)(args).then((result: string) => {
            assert.strictEqual(result, "Hello from Firebase!");
        }).then(done, done) // passing done as a callback for success and reject invocations
    });
});

describe("test helloWorldOnRequestResponse", () => {
    it("result should match 'Hello from Firebase!'", () => {
        const result = helloWorldOnRequestResponse();
        assert.strictEqual(result, "Hello from Firebase!");
    });
});

describe("test helloWorldOnRequest", () => {
   it("result should match 'Hello from Firebase!'", (done) => {
       const req = {};
       const res = {
           send: (result: string) => {
               assert.strictEqual(result, "Hello from Firebase!");
               done();
           }
       };
       helloWorldOnRequest(<Request>req, <Response>res);
   })
});
