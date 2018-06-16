"use strict";

const { createRepository } = require("../../../repository/createRepository");
const createBlogFunction = require("./createBlogFunction");
const handleResponse = require("../../../utils/handleResponse");

const createBlogHandler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  createBlogFunction(body, createRepository(), handleResponse(callback));
};

module.exports.createBlog = createBlogHandler;
