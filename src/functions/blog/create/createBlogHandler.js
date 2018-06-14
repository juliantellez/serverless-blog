'use strict';

const {
    createRepository,
} = require('../../../repository/createRepository')
const createBlogFunction = require('./createBlogFunction')
const handleResponse = require('../../../utils/handleResponse')

const createBlogHanler = (event, context, callback) => {
    createBlogFunction(
        event, 
        createRepository(),
        handleResponse(callback), 
    )
}

module.exports.createBlog = createBlogHanler
