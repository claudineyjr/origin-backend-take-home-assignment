const { LIFE } = require('../constraints/constraints');

const scoreParameters = require('./score');

const calculateRiskProfile = (baseScore, payload) => {
    const age = payload.age;
    const score = baseScore;

    if (age >= LIFE.MAXIMUM_AGE) return 'ineligible';
    
    const finalScore = score 
        + scoreParameters.calculateBasicRiskScore(payload)
        + calculateDependentsRisks(payload.dependents)
        + calculateMaritalStatusRisks(payload.marital_status);
            
    return riskProfile = scoreParameters.getRiskProfileLabel(finalScore);
}

const calculateDependentsRisks = dependents => dependents > 0 ? LIFE.HAS_DEPENDENTS_POINTS : LIFE.NO_DEPENDENTS_POINTS;

const calculateMaritalStatusRisks = maritalStatus => maritalStatus === 'married' ? LIFE.IS_MARRIED_POINTS : LIFE.NOT_MARRIED_POINTS;

module.exports = {
    calculateRiskProfile,
};
