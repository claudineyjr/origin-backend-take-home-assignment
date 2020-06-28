const { responseJson, validatePayload } = require('../utils/controllers');

const riskStatus = (req, res) => {
    validatePayload(res, req.body, '/InsuranceRisk');
    responseJson(res, {status: 'ok'});
};

module.exports = {
    riskStatus,
};
