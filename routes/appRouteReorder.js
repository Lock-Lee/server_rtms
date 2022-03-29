const { authJwt } = require("../middlewares");
const reorder_controller = require("../controllers/ReorderController");

module.exports = function (app) {

    app.post(
        "/reorder/getReorderLastCode",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.getReorderLastCode(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorder/getReorderBy",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.getReorderBy(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorder/getReorderByCode",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.getReorderByCode(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorder/insertReorder",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.insertReorder(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorder/updateReorderBy",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.updateReorderBy(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorder/deleteReorderByCode",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorder_controller.deleteReorderByCode(req.body);
            res.send(result);
        }
    );


};
