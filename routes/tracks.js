const exprees = require("express")
const router = exprees.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")

router.get("/", getItems);


router.get("/:id", validatorGetItem, getItem);


router.post("/",validatorCreateItem, createItem);

router.put("/:id", validatorGetItem ,validatorCreateItem, createItem);

router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router