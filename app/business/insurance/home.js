const { HOME } = require('../constraints/constraints');
const scoreParameters = require('./score');

const calculateRiskProfile = (baseScore, payload) => {
    const home = payload.house;
    const score = baseScore;
    
    if (!home.ownership_status) return 'ineligible';
    
    const finalScore = score
        + scoreParameters.calculateBasicRiskScore(payload);
        + calculateMortgagedHouseRisks(home);
            
    return riskProfile = scoreParameters.getRiskProfileLabel(finalScore);
}

const calculateMortgagedHouseRisks = home => home.ownership_status === 'mortgaged' ? HOME.MORTGAGED_HOUSE_POINTS : HOME.OWNED_HOUSE_POINTS;

module.exports = {
    calculateRiskProfile,
};
