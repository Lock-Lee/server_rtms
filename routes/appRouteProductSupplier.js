const { authJwt } = require("../middlewares");
const productsupplier_controller = require("../controllers/ProductSupplierController");

module.exports = function (app) {
  app.post("/product-supplier/getProductSupplierLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await productsupplier_controller.getProductSupplierLastCode(req.body);
    res.send(result);
  });

  app.post("/product-supplier/getProductSupplierBy", authJwt.verifyToken, async function (req, res) {
   
    const result = await productsupplier_controller.getProductSupplierBy(req.body);
    res.send(result);
  });

  app.post("/product-supplier/getProductSupplierByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productsupplier_controller.getProductSupplierByCode(req.body);
    res.send(result);
  });

  app.post("/product-supplier/saveProductSupplierBy", authJwt.verifyToken, async function (req, res) {
    const result = await productsupplier_controller.saveProductSupplierBy(req.body);
    res.send(result);
  });

  app.post("/product-supplier/updateProductSupplierBy", authJwt.verifyToken, async function (req, res) {
    const result = await productsupplier_controller.updateProductSupplierBy(req.body);
    res.send(result);
  });
  app.post("/product-supplier/insertProductSupplier", authJwt.verifyToken, async function (req, res) {
  
    const result = await productsupplier_controller.insertProductSupplier(req.body);
    res.send(result);
  });
  app.post("/product-supplier/createRowProductSupplier", authJwt.verifyToken, async function (req, res) {
  
    const result = await productsupplier_controller.createRowProductSupplier(req.body);
    res.send(result);
  });
  app.post("/product-supplier/deleteProductSupplierByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await productsupplier_controller.deleteProductSupplierByCode(req.body);
    res.send(result);
  });

  app.post("/product-supplier/deleteProductSupplierByCodeNotIn", authJwt.verifyToken, async function (req, res) {
  
    const result = await productsupplier_controller.deleteProductSupplierByCodeNotIn(req.body);
    res.send(result);
  });
};
