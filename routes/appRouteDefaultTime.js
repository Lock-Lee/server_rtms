const { authJwt } = require("../middlewares");
const DefaultTim_controller = require("../controllers/DefaultTimeController");

module.exports = function (app) {
  app.post(
    "/defaulttime/insertDefaultTime",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await DefaultTim_controller.insertDefaultTime(req.body);
      res.send(result);
    }
  );
  app.post(
    "/defaulttime/getDefaultTime",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await DefaultTim_controller.getDefaultTime(req.body);
      res.send(result);
    }
  );
};
