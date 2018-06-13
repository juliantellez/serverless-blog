const AWS = require('aws-sdk')

const {
    AWS_REGION,
    BLOG_TABLE_NAME,
} = require('./constants')

const {
    DocumentClient
} = AWS.DynamoDB

const dbConfig = {
    region: AWS_REGION,
}

const repositoryFactory = db => {
    const putItem = (item, cb) => db.put(item, cb)
    const deleteItem = (item, cb) => db.delete(item, cb)

    const createBlog = (blog, cb) => {
        const newItem = {
            TableName: BLOG_TABLE_NAME,
            Item: blog,
        }
        putItem(newItem, cb)
    }

    const deleteBlog = (blog, cb) => {
        const blogToDelete = {
            TableName: BLOG_TABLE_NAME,
            Key: blog
        }
        deleteItem(blogToDelete, cb)
    }

    return {
        createBlog,
        deleteBlog,
    }
}

const createRepository = repositoryFactory.bind(null, new DocumentClient(dbConfig))

module.exports = {
    createRepository,
    repositoryFactory,
};
