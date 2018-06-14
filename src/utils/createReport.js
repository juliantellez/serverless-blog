const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createReport = (status, data) => ({status, data})
const reportSuccess = createReport.bind(null, SUCCESS)
const reportfailure = createReport.bind(null, FAILURE)

module.exports = {
    createReport,
    reportSuccess,
    reportfailure,
}
