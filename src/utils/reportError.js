const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createReport = (status, data) => ({status, data})

const reportError = cb => (error, data) => {
    if (error) {
        cb(createReport(FAILURE, error))
    } else {
        cb(null, createReport(SUCCESS, data))
    }
}

module.exports = reportError;
