"use strict";

const { createRepository } = require("../../../repository/createRepository");
const deleteBlogFunction = require("./deleteBlogFunction");
const handleResponse = require("../../../utils/handleResponse");

const deleteBlogHandler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  deleteBlogFunction(body, createRepository(), handleResponse(callback));
};

module.exports.deleteBlog = deleteBlogHandler;
