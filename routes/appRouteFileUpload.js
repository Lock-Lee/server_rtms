const { authJwt } = require("../middlewares")

const FileUploadController = require('../controllers/FileUploadController')

module.exports = function (app) {

    app.post('/file-upload/uploadFile', authJwt.verifyToken, FileUploadController.uploadFile)
    app.post('/file-upload/deleteFlie', authJwt.verifyToken, FileUploadController.deleteFile)
}