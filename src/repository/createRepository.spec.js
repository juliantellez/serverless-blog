const chai = require("chai");
const sinon = require("sinon");

const { repositoryFactory } = require("./createRepository");

describe("createRepository", function() {
  this.context = {};
  beforeEach(() => {
    const db = {
      put: sinon.stub(),
      delete: sinon.stub()
    };
    const blog = {
      id: "foo",
      content: "baz"
    };
    this.context = {
      db,
      blog
    };
  });
  afterEach(() => {
    this.context = {};
  });
  it("should create a repository", () => {
    const repository = repositoryFactory(this.context.db);
    chai.assert.exists(repository);
    chai.assert.exists(repository.createBlog);
    chai.assert.exists(repository.deleteBlog);
  });
  it("should put items in the db", () => {
    const { createBlog } = repositoryFactory(this.context.db);

    const cb = () => {};
    createBlog(this.context.blog, cb);

    const value = this.context.db.put.firstCall.args;
    const expected = [
      {
        TableName: "BlogPosts",
        Item: {
          id: "foo",
          content: "baz"
        }
      },
      cb
    ];

    chai.assert.deepEqual(value, expected);
  });
  it("should delete items from the db", () => {
    const { deleteBlog } = repositoryFactory(this.context.db);

    const cb = () => {};
    deleteBlog(this.context.blog, cb);

    const value = this.context.db.delete.firstCall.args;
    const expected = [
      {
        TableName: "BlogPosts",
        Key: {
          id: "foo",
          content: "baz"
        }
      },
      cb
    ];

    chai.assert.deepEqual(value, expected);
  });
});
