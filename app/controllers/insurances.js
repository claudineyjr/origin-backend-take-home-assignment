const { responseJson, validatePayload } = require('../utils/controllers');

const insuranceRiskService = require('../services/insurances-risk');

const riskStatus = (req, res) => {
    const body = req.body;
    validatePayload(res, body, '/InsuranceRisk');
    responseJson(res, insuranceRiskService.calculateRiskProfile(body));
};

module.exports = {
    riskStatus,
};
