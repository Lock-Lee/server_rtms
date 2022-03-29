const { authJwt } = require("../middlewares");
const product_controller = require("../controllers/ProductController");

module.exports = function (app) {
  app.post(
    "/product/getProductLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/product/getProductBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/product/getProductByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/product/insertProduct",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.insertProduct(req.body);
      res.send(result);
    }
  );

  app.post(
    "/product/updateProductBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.updateProductBy(req.body);
      res.send(result);
    }
  );
  app.post(
    "/product/getProductByGroup",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductByGroup(req.body);
      res.send(result);
    }
  );
  app.post(
    "/product/getProductByType",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductByType(req.body);
      res.send(result);
    }
  );
  app.post(
    "/product/deleteProductByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.deleteProductByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/product/getProductALLByGroup",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.getProductALLByGroup(req.body);
      res.send(result);
    }
  );
  app.post(
    "/product/checkProductByTransaction",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await product_controller.checkProductByTransaction(
        req.body
      );
      res.send(result);
    }
  );
};
