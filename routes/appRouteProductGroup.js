const { authJwt } = require("../middlewares");
const productgroup_controller = require("../controllers/ProductGroupController");
//ass
module.exports = function (app) {
  app.post("/product-group/generateProductGroupLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await productgroup_controller.getProductGroupLastCode(req.body);
    res.send(result);
  });

  app.post("/product-group/getProductGroupBy", authJwt.verifyToken, async function (req, res) {
    const result = await productgroup_controller.getProductGroupBy(req.body);
    res.send(result);
  });

  app.post("/product-group/getProductGroupByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productgroup_controller.getProductGroupByCode(req.body);
    res.send(result);
  });

  app.post("/product-group/insertProductGroup", authJwt.verifyToken, async function (req, res) {
    const result = await productgroup_controller.insertProductGroup(req.body);
    res.send(result);
  });

  app.post("/product-group/updateProductGroupBy", authJwt.verifyToken, async function (req, res) {
    const result = await productgroup_controller.updateProductGroupBy(req.body);
    res.send(result);
  });

  app.post("/product-group/deleteProductGroupByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await productgroup_controller.deleteProductGroupByCode(req.body);
    res.send(result);
  });
};
