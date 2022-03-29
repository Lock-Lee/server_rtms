const { authJwt } = require("../middlewares")

const license_controller = require('../controllers/LicenseController')

module.exports = function (app) {

    app.post('/license/getLicenseLastCode', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.getLicenseLastCode(req.body)
        res.send(result)
    })
    app.post('/license/getLicenseBy', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.getLicenseBy(req.body)
        res.send(result)
    })
    app.post('/license/getLicenseByCode', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.getLicenseByCode(req.body)
        res.send(result)
    })
    app.post('/license/updateLicenseBy', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.updateLicenseBy(req.body)
        res.send(result)
    })
    app.post('/license/insertLicense', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.insertLicense(req.body)
        res.send(result)
    })
    app.post('/license/deleteLicenseByCode', authJwt.verifyToken, async function (req, res) {
        const result = await license_controller.deleteLicenseByCode(req.body)
        res.send(result)
    })
}