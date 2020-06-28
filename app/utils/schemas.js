const importSchema = (schemasObject = {}, validator) => {
    for (let [key] of Object.entries(schemasObject)) {
        const schema = schemasObject[key];
        validator.addSchema(schema, schema.id);
    }
};

module.exports = {
    importSchema,
};
