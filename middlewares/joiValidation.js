const validation = (schema) => {
    let joiValidation = (req, res, next) => {
        let error = schema.validate(req.body);
        console.log(error);
    }
    return joiValidation
};

module.exports = validation;