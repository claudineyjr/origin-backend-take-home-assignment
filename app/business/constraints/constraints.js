module.exports = {
    RISK_PROFILE: {
        ECONOMIC: {
            LABEL: 'economic',
            MAX_SCORE: 0,
        },
        REGULAR: {
            LABEL: 'regular',
            MIN_SCORE: 1,
            MAX_SCORE: 2,
        },
        RESPONSIBLE: {
            LABEL: "responsible",
            MIN_SCORE: 3
        },
    },
    RISK_PARAMETERS: {
        AGE: {
            LOW_RISK_MIN: 30,
            MEDIUM_RISK_MIN: 30,
            MEDIUM_RISK_MAX: 40,
            LOW_RISK_POINTS: -2,
            MEDIUM_RISK_POINTS: -1,
            HIGH_RISK_POINTS: 0,
        },
        INCOME: {
            LOW_RISK_MIN: 200000,
            LOW_RISK_POINTS: -1,
            MEDIUM_RISK_POINTS: 0,
        },
    },
    HOME: {
        MORTGAGED_HOUSE_POINTS: 1,
        OWNED_HOUSE_POINTS: 0,
    },
    AUTO: {
        HIGH_RISK_VEHICLE_MIN_AGE: 5,
        HIGH_RISK_VEHICLE_POINTS: 1,
        LOW_RISK_VEHICLE_POINTS: 0,
    },
    DISABILITY: {
        MAXIMUM_AGE: 60,
        MORTGAGED_HOUSE_POINTS: 1,
        OWNED_HOUSE_POINTS: 0,
        HAS_DEPENDENTS_POINTS: 1,
        NO_DEPENDENTS_POINTS: 0,
        IS_MARRIED_POINTS: -1,
        NOT_MARRIED_POINTS: 0,
    },
    LIFE: {
        MAXIMUM_AGE: 60,
        HAS_DEPENDENTS_POINTS: 1,
        NO_DEPENDENTS_POINTS: 0,
        IS_MARRIED_POINTS: 1,
        NOT_MARRIED_POINTS: 0,
    },
};
