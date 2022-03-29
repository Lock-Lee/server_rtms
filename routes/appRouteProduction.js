const { authJwt } = require("../middlewares");
const production_controller = require("../controllers/ProductionController");

module.exports = function (app) {
  app.post("/production/getProductionLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await production_controller.getProductionLastCode(req.body);
    res.send(result);
  });

  app.post("/production/getProductionBy", authJwt.verifyToken, async function (req, res) {
    const result = await production_controller.getProductionBy(req.body);
    res.send(result);
  });

  app.post("/production/getProductionByCode", authJwt.verifyToken, async function (req, res) {
    const result = await production_controller.getProductionByCode(req.body);
    res.send(result);
  });

  app.post("/production/insertProduction", authJwt.verifyToken, async function (req, res) {
   
    const result = await production_controller.insertProduction(req.body);
    res.send(result);
  });

  app.post("/production/updateProductionBy", authJwt.verifyToken, async function (req, res) {
    const result = await production_controller.updateProductionBy(req.body);
    res.send(result);
  });

  app.post("/production/deleteProductionByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await production_controller.deleteProductionByCode(req.body);
    res.send(result);
  });
};
