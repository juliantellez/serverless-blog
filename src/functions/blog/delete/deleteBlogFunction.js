const deleteBlogFunction = (blog, repository, cb) => {
  // TODO: validate schema
  repository.deleteBlog(blog, cb);
};

module.exports = deleteBlogFunction;
