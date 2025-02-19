const exprees = require("express")
const router = exprees.Router()
const { getItems } = require("../controllers/tracks")

router.get("/", getItems);

router.post("/", createItem);

module.exports = router