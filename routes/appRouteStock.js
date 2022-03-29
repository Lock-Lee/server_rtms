const { authJwt } = require("../middlewares");
const stock_controller = require("../controllers/StockController");

module.exports = function (app) {
  app.post("/stock/generateStockLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.getStockLastCode(req.body);
    res.send(result);
  });

  app.post("/stock/getStock", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.getStock(req.body);
    res.send(result);
  });
  

  app.post("/stock/getStockByCode", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.getStockByCode(req.body);
    res.send(result);
  });

  app.post("/stock/insertStock", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.insertStock(req.body);
    res.send(result);
  });

  app.post("/stock/updateStock", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.updateStock(req.body);
    res.send(result);
  });

  app.post("/stock/deleteStockByCode", authJwt.verifyToken, async function (req, res) {
    const result = await stock_controller.deleteStockByCode(req.body);
    res.send(result);
  });
};
