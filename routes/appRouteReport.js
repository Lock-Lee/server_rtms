const { authJwt } = require("../middlewares");
const report_controller = require("../controllers/ReportController");

module.exports = function (app) {
  app.post(
    "/report/getReceiveReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getReceiveReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getIssueReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getIssueReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getBalanceReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getBalanceReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getIncidentReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getIncidentReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getTransactionReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getTransactionReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getLowStockReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getLowStockReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/getSettingReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.getSettingReport(req.body);
      res.send(result);
    }
  );

  app.post(
    "/report/updateSettingReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await report_controller.updateSettingReport(req.body);
      res.send(result);
    }
  );
};
