const { authJwt } = require("../middlewares");

const auth_controller = require("../controllers/AuthController");
const user_controller = require("../controllers/UserController");

module.exports = function (app) {
  app.post("/user/checkLogin", auth_controller.signin);
  app.post("/user/checkLoginRFID", auth_controller.signinRFID);
  app.post(
    "/user/getUserLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await user_controller.getUserLastCode(req.body);
      res.send(result);
    }
  );
  app.post("/user/getUserBy", authJwt.verifyToken, async function (req, res) {
    const result = await user_controller.getUserBy(req.body);
    res.send(result);
  });
  app.post(
    "/user/getUserByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await user_controller.getUserByCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/user/checkUsernameBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await user_controller.checkUsernameBy(req.body);
      res.send(result);
    }
  );
  app.post(
    "/user/updateUserBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await user_controller.updateUserBy(req.body);
      res.send(result);
    }
  );
  app.post("/user/insertUser", authJwt.verifyToken, async function (req, res) {
    const result = await user_controller.insertUser(req.body);
    res.send(result);
  });
  app.post(
    "/user/deleteUserByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await user_controller.deleteUserByCode(req.body);
      res.send(result);
    }
  );
};
