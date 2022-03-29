const { authJwt } = require("../middlewares")

const manu_controller = require('../controllers/MenuController')

module.exports = function (app) {

    app.post('/menu/getMenuBy', authJwt.verifyToken, async function (req, res) {
        const result = await manu_controller.getMenuBy(req.body)
        res.send(result)
    })
    app.post('/menu/updateMenuBy', authJwt.verifyToken, async function (req, res) {
        const result = await manu_controller.updateMenuBy(req.body)
        res.send(result)
    })
}