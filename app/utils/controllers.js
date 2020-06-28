const HttpStatus = require('http-status-codes');

const responseJson = (res, data, code = HttpStatus.OK) => {
  res.status(code);
  return res.send(data);
};

const responseErrorJson = (res, methodName, error, statusCode = HttpStatus.INTERNAL_SERVER_ERROR) => {
    res.status(error.httpCode || statusCode);
    console.error(methodName, error);
    return res.json({
        error: error.message || error.toString()
    });
};

module.exports = exports =  {
  responseJson,
  responseErrorJson,
};
