const { reportfailure, reportSuccess } = require("./createReport");

const handleResponse = cb => (error, data) => {
  if (error) {
    const errorReport = JSON.stringify(reportfailure(error));
    cb(errorReport);
  } else {
    cb(null, reportSuccess(data));
  }
};

module.exports = handleResponse;
