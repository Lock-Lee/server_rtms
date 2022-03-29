const { authJwt } = require("../middlewares");
const producttype_controller = require("../controllers/ProductTypeController");

module.exports = function (app) {
  app.post("/product-type/generateProductTypeLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await producttype_controller.getProductTypeLastCode(req.body);
    res.send(result);
  });

  app.post("/product-type/getProductTypeBy", authJwt.verifyToken, async function (req, res) {
    const result = await producttype_controller.getProductTypeBy(req.body);
    res.send(result);
  });

  app.post("/product-type/getProductTypeByCode", authJwt.verifyToken, async function (req, res) {
    const result = await producttype_controller.getProductTypeByCode(req.body);
    res.send(result);
  });

  app.post("/product-type/insertProductType", authJwt.verifyToken, async function (req, res) {
    const result = await producttype_controller.insertProductType(req.body);
    res.send(result);
  });

  app.post("/product-type/updateProductTypeBy", authJwt.verifyToken, async function (req, res) {
    const result = await producttype_controller.updateProductTypeBy(req.body);
    res.send(result);
  });

  app.post("/product-type/deleteProductTypeByCode", authJwt.verifyToken, async function (req, res) {
   
    const result = await producttype_controller.deleteProductTypeByCode(req.body);
    res.send(result);
  });
};
