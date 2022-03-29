const { authJwt } = require("../middlewares");
const email_controller = require("../controllers/EmailController");

module.exports = function (app) {
  app.post(
    "/email/sendReceiveReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendReceiveReport(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendIssueReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendIssueReport(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendBalanceReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendBalanceReport(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendIncidentReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendIncidentReport(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendTransactionReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendTransactionReport(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendIssueEmail",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendIssueEmail(req.body);
      res.send(result);
    }
  );
  app.post(
    "/email/sendLowStockReport",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await email_controller.sendLowStockReport(req.body);
      res.send(result);
    }
  );
};
