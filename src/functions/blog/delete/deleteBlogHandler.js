"use strict";

const deleteBlogFunction = require("./deleteBlogFunction");
const handleResponse = require("../../../utils/handleResponse");

const deleteBlogHandler = (event, context, callback) => {
  deleteBlogFunction(event, handleResponse(callback));
};

module.exports.deleteBlog = deleteBlogHandler;
