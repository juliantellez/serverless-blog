'use strict';

const AWS = require('aws-sdk')

const config = require('./config')

const documentClient = new AWS.DynamoDB.DocumentClient({region: config.region});

const deleteBlogPost = (params, callback) => documentClient.delete(params, callback)

const createParams = Key => ({
    TableName : config.tableName,
    Key
})

const createDeleteHandler = cb => (error, data) => {
    if (error) {
        cb(error)
    } else {
        cb('deleted', data)
    }
}

module.exports.handler = (event, context, callback) =>
    deleteBlogPost(
        createParams(event),
        createDeleteHandler(callback)
    );
