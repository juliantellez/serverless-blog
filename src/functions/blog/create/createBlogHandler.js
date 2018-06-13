'use strict';

const createBlogFunction = require('./createBlogFunction')
const reportError = require('../../../utils/reportError')

const createBlogHanler = (event, context, callback) => {
    createBlogFunction(event, reportError(callback))
}

module.exports.createBlog = createBlogHanler
