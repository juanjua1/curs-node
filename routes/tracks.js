const exprees = require("express")
const router = exprees.Router()

router.get("/", (req, res) => {

    const data = ["hola", "mundo"]

    res.send({data})
})

module.exports = router