const { check, validationResult } = require('express-validator');
const validationResult = require('../utils/handleValidator');

const validatorCreateItem = [
    check("name").exists().notEmpty(), 
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("durationId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = { validatorCreateItem };