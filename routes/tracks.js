const exprees = require("express")
const router = exprees.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks")
const { getItems, getItem, createItem } = require("../controllers/tracks")

router.get("/", getItems);

router.post("/",validatorCreateItem,customHeader, createItem);

module.exports = router