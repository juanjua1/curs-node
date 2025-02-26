const exprees = require("express")
const router = exprees.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem } = require("../controllers/tracks")

router.get("/", getItems);


router.get("/:id", getItems);


router.post("/",validatorCreateItem, createItem);

module.exports = router