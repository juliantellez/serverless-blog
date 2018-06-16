const chai = require("chai");

const reportError = require("./handleResponse");

describe("handleResponse", () => {
  it("should report error", () => {
    const error = new Error("foo");
    const cb = (error, response) => {
      const value = response;
      const expected = {
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 500,
        isBase64Encoded: false,
        body: "{}"
      };
      chai.assert.deepEqual(value, expected);
    };
    reportError(cb)(error);
  });
  it("should report succes", () => {
    const customData = {
      foo: "baz"
    };
    const cb = (error, response) => {
      const value = response;
      const expected = {
        headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        isBase64Encoded: false,
        body: '{"foo":"baz"}'
      };
      chai.assert.deepEqual(value, expected);
    };
    reportError(cb)(null, customData);
  });
});
