const insuranceBusinessRules = require('../business/insurance/score');
const autoBusinessRules = require('../business/insurance/auto');
const disabilityBusinessRules = require('../business/insurance/disability');
const homeBusinessRules = require('../business/insurance/home');
const lifeBusinessRules = require('../business/insurance/life');

const calculateRiskProfile = (payload) => {
    const baseScore = insuranceBusinessRules.calculateBaseScore(payload.risk_questions);
    const response = {
        auto: autoBusinessRules.calculateRiskProfile(baseScore, payload),
        disability: disabilityBusinessRules.calculateRiskProfile(baseScore, payload),
        home: homeBusinessRules.calculateRiskProfile(baseScore, payload),
        life: lifeBusinessRules.calculateRiskProfile(baseScore, payload)
    };
    return response;
}

module.exports = {
    calculateRiskProfile,
};
