const chai = require("chai");
const sinon = require("sinon");

const createBlogFunction = require("./createBlogFunction");

describe("createBlogFunction", () => {
  it("should validate blog", () => {
    const blog = {};
    const repository = {};
    const cb = error => {
      const value = error;
      const expected = "Blog must have a primary key";
      chai.assert.deepEqual(value, expected);
    };

    createBlogFunction(blog, repository, cb);
  });
  it("should call repository", () => {
    const blog = { uuid: "foo" };
    const repository = { createBlog: sinon.stub() };
    const cb = () => {};
    createBlogFunction(blog, repository, cb);

    chai.assert.isTrue(repository.createBlog.called);
  });
});
