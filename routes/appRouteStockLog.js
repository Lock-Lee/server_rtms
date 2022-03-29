const { authJwt } = require("../middlewares");
const Stocklog_controller = require("../controllers/StocklogController");

module.exports = function (app) {
  app.post(
    "/stocklog/getStockLogLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Stocklog_controller.getStockLogLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stocklog/insertStocklog",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Stocklog_controller.insertStockLog(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stocklog/getStockLogByType",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Stocklog_controller.getStockLogByType(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stocklog/getStockLogByIssueCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Stocklog_controller.getStockLogByIssueCode(req.body);
      res.send(result);
    }
  );
};
