const { authJwt } = require("../middlewares");
const productmenu_controller = require("../controllers/ProductMenuController");

module.exports = function (app) {

  app.post("/product-menu/getProductMenuAll", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.getProductMenuAll(req.body);
    res.send(result);
  });

  app.post("/product-menu/getProductMenuBy", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.getProductMenuBy(req.body);
    res.send(result);
  });

  app.post("/product-menu/getProductMenuByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.getProductMenuByCode(req.body);
    res.send(result);
  });

  app.post("/product-menu/insertProductMenu", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.insertProductMenu(req.body);
    res.send(result);
  });

  app.post("/product-menu/updateProducMenuByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.updateProductMenuByCode(req.body);
    res.send(result);
  });

  app.post("/product-menu/deleteProductMenuByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productmenu_controller.deleteProductMenutByCode(req.body);
    res.send(result);
  });

};
