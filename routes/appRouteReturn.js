const { authJwt } = require("../middlewares");
const return_controller = require("../controllers/ReturnController");

module.exports = function (app) {

  app.post(
    "/return/getReturnByUsercode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await return_controller.getReturnByUsercode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/return/getReturnLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await return_controller.getReturnLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/return/insertReturn",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await return_controller.insertReturn(req.body);
      res.send(result);
    }
  );






};
