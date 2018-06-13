'use strict';

const deleteBlogFunction = require('./deleteBlogFunction')
const reportError = require('../../../utils/reportError')

const deleteBlogHandler = (event, context, callback) => {
    deleteBlogFunction(event, reportError(callback))
}

module.exports.deleteBlog = deleteBlogHandler
