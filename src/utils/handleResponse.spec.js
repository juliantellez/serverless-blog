const chai = require("chai");

const reportError = require("./handleResponse");

describe("handleResponse", () => {
  it("should report error", () => {
    const error = new Error("foo");
    const cb = error => {
      const parsedError = JSON.parse(error);
      const value = parsedError.status;
      const expected = "FAILURE";
      chai.assert.equal(value, expected);
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
        status: "SUCCESS",
        data: customData
      };
      chai.assert.deepEqual(value, expected);
    };
    reportError(cb)(null, customData);
  });
});
