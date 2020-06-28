const { responseJson, responseErrorJson } = require('../utils/controllers');
const { response } = require('express');

const riskStatus = (req, res) => {
    responseJson(res, { message: "hi there" });
};

module.exports = {
    riskStatus,
};
