const JsonSchemaValidator = require('jsonschema').Validator;

const { importSchema } = require('../utils/schemas');

const insurances = require('./insurances');

validator = new JsonSchemaValidator();

const schemas = {
    ...insurances
};

importSchema(schemas, validator);

module.exports = exports = {
    validator,
};
