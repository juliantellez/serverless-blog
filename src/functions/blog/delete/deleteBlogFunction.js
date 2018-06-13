const {
    createRepository,
} = require('../../../repository/createRepository')

const deleteBlogFunction = (blog, cb) => {
    const {
        deleteBlog,
    } = createRepository()

    // TODO: validate schema
    deleteBlog(blog, cb)
}

module.exports = deleteBlogFunction;
