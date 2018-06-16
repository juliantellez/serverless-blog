const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

const createResponse = (statusCode, body, headers = {}) => {
  const response = {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    statusCode,
    isBase64Encoded: false,
    body: JSON.stringify(body)
  };
  return response;
};

const reportSuccess = createResponse.bind(null, OK);
const reportfailure = createResponse.bind(null, INTERNAL_SERVER_ERROR);

module.exports = {
  reportSuccess,
  reportfailure
};
