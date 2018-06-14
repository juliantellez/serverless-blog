const {
    reportfailure,
    reportSuccess,
} = require('./createReport')

const handleResponse = cb => (error, data) => {
    if (error) {
        cb(reportfailure(error))
    } else {
        cb(null, reportSuccess(data))
    }
}

module.exports = handleResponse;
