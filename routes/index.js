const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

const a =fs.readdirSync(PATH_ROUTES)
console.log({a})
module.exports = router;