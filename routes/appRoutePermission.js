const { authJwt } = require("../middlewares")

const permission_controller = require('../controllers/PermissionController')

module.exports = function (app) {

    app.post('/permission/getPermissionBy', authJwt.verifyToken, async function (req, res) {
        const result = await permission_controller.getPermissionBy(req.body)
        res.send(result)
    })
}