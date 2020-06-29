const HttpStatus = require('http-status-codes');
const ApiErrors = require('./messages/api-errors');
const { validator } = require('../schemas/index');

const responseJson = (res, data, code = HttpStatus.OK) => {
  res.status(code);
  return res.send(data);
};

const responseErrorJson = (res, statusCode = HttpStatus.INTERNAL_SERVER_ERROR, error = ApiErrors.INTERNAL_SERVER_ERROR) => {
    res.status(error.httpCode || statusCode);
    return res.json({
        error: error || error.toString()
    });
};

const validatePayload = (res, payload= {}, expectedSchema) => {
  validator.validate(payload, expectedSchema).errors.length && responseErrorJson(res, HttpStatus.BAD_REQUEST, ApiErrors.BAD_REQUEST);
};

module.exports = exports =  {
  responseJson,
  responseErrorJson,
  validatePayload,
};
