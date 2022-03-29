const { authJwt } = require("../middlewares");
const success_controller = require("../controllers/SuccessController");

module.exports = function (app) {
  app.post(
    "/success/getSuccessLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.getSuccessLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/success/getSuccessBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.getSuccessBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/success/getSuccessByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.getSuccessByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/success/insertSuccess",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.insertSuccess(req.body);
      res.send(result);
    }
  );

  app.post(
    "/success/updateSuccessBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.updateSuccessBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/success/deleteSuccessByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await success_controller.deleteSuccessByCode(req.body);
      res.send(result);
    }
  );
};
