const { authJwt } = require("../middlewares");
const productbrand_controller = require("../controllers/ProductBrandController");
//awdasad
module.exports = function (app) {
  app.post("/product-brand/getProductBrandLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await productbrand_controller.getProductBrandLastCode(req.body);
    res.send(result);
  });

  app.post("/product-brand/getProductBrandBy", authJwt.verifyToken, async function (req, res) {
    const result = await productbrand_controller.getProductBrandBy(req.body);
    res.send(result);
  });

  app.post("/product-brand/getProductBrandByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productbrand_controller.getProductBrandByCode(req.body);
    res.send(result);
  });

  app.post("/product-brand/insertProductBrand", authJwt.verifyToken, async function (req, res) {
    const result = await productbrand_controller.insertProductBrand(req.body);
    res.send(result);
  });

  app.post("/product-brand/updateProductBrandBy", authJwt.verifyToken, async function (req, res) {
    const result = await productbrand_controller.updateProductBrandBy(req.body);
    res.send(result);
  });

  app.post("/product-brand/deleteProductBrandByCode", authJwt.verifyToken, async function (req, res) {

    const result = await productbrand_controller.deleteProductBrandByCode(req.body);
    res.send(result);
  });
};
