const houseSchema = {
    id: "/HouseOwnershipStatus",
    type: "object",
    properties: {
        ownership_status: {
            type: "string",
            enum: [ "owned", "mortgaged" ]
        },
    },
};

const vehicleSchema = {
    id: "/VehicleBasicInfos",
    type: "object",
    properties: {
        year: {
            type: "integer",
            minimum: 1900,
            maximum: new Date().getFullYear() + 1,
        },
    },
};

const riskQuestionsSchema = {
    id: "/RiskQuestions",
    type: "array",
    minItems: "3",
    maxItems: "3",
    items: {
       type: "integer",
       minimum: 0,
       maximum: 1,
    },
};

const insuranceRiskSchema = {
    id: "/InsuranceRisk",
    type: "object",
    properties: {
        age: {
            type: "integer",
            minimum: 0,
        },
        dependents: {
            type: "integer",
            minimum: 0,
    },
        house: { "$ref": "/HouseOwnershipStatus" },
        income: {
            type: "integer",
            minimum: 0,
    },
        marital_status: { type: "string", enum: [ "single", "married" ] },
        risk_questions: { "$ref": "/RiskQuestions" },
        vehicle: { "$ref": "/VehicleBasicInfos" },
    },
    required: [ "age", "dependents", "house", "income", "marital_status", "risk_questions", "vehicle" ],
};

module.exports = {
    vehicleSchema,
    houseSchema,
    riskQuestionsSchema,
    insuranceRiskSchema,
};
