const { RISK_PARAMETERS, RISK_PROFILE } = require('../constraints/constraints');

const calculateBaseScore = (riskQuestions) => riskQuestions.reduce((acc, curr) => acc + curr);

const calculateAgeGeneralRisk = (age) => {
    return age < RISK_PARAMETERS.AGE.LOW_RISK_MIN ? RISK_PARAMETERS.AGE.LOW_RISK_POINTS :
        age >= RISK_PARAMETERS.AGE.MEDIUM_RISK_MIN &&
        age <= RISK_PARAMETERS.AGE.MEDIUM_RISK_MAX ? RISK_PARAMETERS.AGE.MEDIUM_RISK_POINTS : RISK_PARAMETERS.AGE.HIGH_RISK_POINTS;
}

const calculateIncomeGeneralRisk = income => income > RISK_PARAMETERS.INCOME.LOW_RISK_MIN ? RISK_PARAMETERS.INCOME.LOW_RISK_POINTS : RISK_PARAMETERS.INCOME.MEDIUM_RISK_POINTS;

const calculateBasicRiskScore = payload => calculateAgeGeneralRisk(payload.age) + calculateIncomeGeneralRisk(payload.income);

const getRiskProfileLabel = (finalScore) => {
    const { ECONOMIC, REGULAR, RESPONSIBLE } = RISK_PROFILE;
    return finalScore <= ECONOMIC.MAX_SCORE ? ECONOMIC.LABEL :
        finalScore >= REGULAR.MIN_SCORE && finalScore <= REGULAR.MAX_SCORE ? REGULAR.LABEL :
        finalScore >= RESPONSIBLE.MIN_SCORE ? RESPONSIBLE.LABEL : null; 
};

module.exports = {
    calculateBaseScore,
    calculateBasicRiskScore,
    getRiskProfileLabel,
};
