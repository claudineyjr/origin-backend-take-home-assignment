const { AUTO, RISK_PROFILE } = require('../constraints/constraints');

const scoreParameters = require('./score');

const calculateRiskProfile = (baseScore, payload) => {
    const vehicle = payload.vehicle;
    const score = baseScore;

    if (!vehicle.year) return 'ineligible';

    const finalScore = score
        + scoreParameters.calculateBasicRiskScore(payload)
        + calculateVehicleAgeRisks(vehicle.year);
    return riskProfile = scoreParameters.getRiskProfileLabel(finalScore);
}

const calculateVehicleAgeRisks = (vehicleYear) => {
    const vehicleAge = new Date().getFullYear() - vehicleYear;
    return vehicleAge <= AUTO.HIGH_RISK_VEHICLE_MIN_AGE ? AUTO.HIGH_RISK_VEHICLE_POINTS : AUTO.LOW_RISK_VEHICLE_POINTS;
}

module.exports = {
    calculateRiskProfile,
};
