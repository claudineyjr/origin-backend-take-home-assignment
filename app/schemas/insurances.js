const houseSchema = {
    id: "/HouseOwnershipStatus",
    type: "object",
    properties: {
        ownership_status: {
            type: "string",
            enum: [ "owned", "mortgaged" ]
        },
    },
    required: [ "ownership_status" ],
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
    required: [ "year" ],
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
        dependents: { type: "integer" },
        house: { "$ref": "/HouseOwnershipStatus" },
        income: { type: "integer" },
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
