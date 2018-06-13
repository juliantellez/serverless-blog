const {
    createRepository,
} = require('../../../repository/createRepository')

const createBlogFunction = (blog, cb) => {
    const {
        createBlog,
    } = createRepository()

    // TODO: validate schema
    createBlog(blog, cb)
}

module.exports = createBlogFunction;
