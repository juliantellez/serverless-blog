'use strict';

const AWS = require('aws-sdk')

const config = require('./config')

const documentClient = new AWS.DynamoDB.DocumentClient({region: config.region});

const createBlogPost = (params, callback) => documentClient.put(params, callback)

const validateItem = Item => Object.assign(
    Object.seal(config.blogPostSchema), 
    Item,
)

const createParams = Item => ({
    TableName : config.tableName,
    Item,
})

const schema = {
    [config.primaryKey]: '',

}

const createWriteHandler = cb => (error, data) => {
    if (error) {
        cb(error)
    } else {
        cb('success', data)
    }
}

createBlogPost(
    createParams({title: 2, blogUuid: 'test'}),
    createWriteHandler(console.log)
);

module.exports.handler = (event, context, callback) =>
    createBlogPost(
        createParams(event),
        createWriteHandler(callback)
    );
