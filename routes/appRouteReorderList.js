const { authJwt } = require("../middlewares");
const reorderlist_controller = require("../controllers/ReorderListController");

module.exports = function (app) {

    app.post(
        "/reorderlist/getReorderListByReordersCode",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorderlist_controller.getReorderListByReordersCode(req.body);
            res.send(result);
        }
    );

    app.post(
        "/reorderlist/insertReorderList",
        authJwt.verifyToken,
        async function (req, res) {
            const result = await reorderlist_controller.insertReorder(req.body);
            res.send(result);
        }
    );

};
