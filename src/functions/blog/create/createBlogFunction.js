const { reportfailure } = require("../../../utils/createReport");

const createBlogFunction = (blog, repository, cb) => {
  if (!blog.uuid) {
    return cb("Blog must have a primary key");
  }
  repository.createBlog(blog, cb);
};

module.exports = createBlogFunction;
