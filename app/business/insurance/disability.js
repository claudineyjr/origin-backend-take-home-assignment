const { DISABILITY } = require('../constraints/constraints');

const scoreParameters = require('./score');

const calculateRiskProfile = (baseScore, payload) => {
    const income = payload.income;
    const score = baseScore;

    if (income <= 0 || payload.age >= DISABILITY.MAXIMUM_AGE) return 'ineligible';
    
    const finalScore = score 
        + scoreParameters.calculateBasicRiskScore(payload)
        + calculateMortgagedHouseRisks(payload.house)
        + calculateDependentsRisks(payload.dependents)
        + calculateMaritalStatusRisks(payload.marital_status);
            
    return riskProfile = scoreParameters.getRiskProfileLabel(finalScore);
}

const calculateMortgagedHouseRisks = house => house.ownership_status === 'mortgaged' ? DISABILITY.MORTGAGED_HOUSE_POINTS : DISABILITY.OWNED_HOUSE_POINTS;

const calculateDependentsRisks = dependents => dependents > 0 ? DISABILITY.HAS_DEPENDENTS_POINTS : DISABILITY.NO_DEPENDENTS_POINTS;

const calculateMaritalStatusRisks = maritalStatus => maritalStatus === 'married' ? DISABILITY.IS_MARRIED_POINTS : DISABILITY.NOT_MARRIED_POINTS;

module.exports = {
    calculateRiskProfile,
};
