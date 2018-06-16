const { reportfailure, reportSuccess } = require("./createReport");

const handleResponse = cb => (error, data) => {
  if (error) {
    cb(null, reportfailure(error));
  } else {
    cb(null, reportSuccess(data));
  }
};

module.exports = handleResponse;
