const { authJwt } = require("../middlewares");
const supplier_controller = require("../controllers/SupplierController");

module.exports = function (app) {
  app.post("/supplier/generateSupplierLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await supplier_controller.getSupplierLastCode(req.body);
    res.send(result);
  });

  app.post("/supplier/getSupplierBy", authJwt.verifyToken, async function (req, res) {
    const result = await supplier_controller.getSupplierBy(req.body);
    res.send(result);
  });

  app.post("/supplier/getSupplierByCode", authJwt.verifyToken, async function (req, res) {
    const result = await supplier_controller.getSupplierByCode(req.body);
    res.send(result);
  });

  app.post("/supplier/insertSupplier", authJwt.verifyToken, async function (req, res) {
    const result = await supplier_controller.insertSupplier(req.body);
    res.send(result);
  });

  app.post("/supplier/updateSupplierBy", authJwt.verifyToken, async function (req, res) {
    const result = await supplier_controller.updateSupplierBy(req.body);
    res.send(result);
  });

  app.post("/supplier/deleteSupplierByCode", authJwt.verifyToken, async function (req, res) {

    const result = await supplier_controller.deleteSupplierByCode(req.body);
    res.send(result);
  });
};
