const { validationResult } = require('express-validator');

const validationResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(403)
        res.send({ error: err.array() });
    }
};

module.exports = validationResult 