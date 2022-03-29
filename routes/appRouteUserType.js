const { authJwt } = require("../middlewares");
const UserType_controller = require("../controllers/UserTypeController");

module.exports = function (app) {
  app.post(
    "/user-type/generateUserTypeLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.getUserTypeLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/user-type/getUserTypeBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.getUserTypeBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/user-type/getUserTypeByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.getUserTypeByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/user-type/insertUserType",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.insertUserType(req.body);
      res.send(result);
    }
  );

  app.post(
    "/user-type/updateUserTypeBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.updateUserTypeBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/user-type/deleteUserTypeByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserType_controller.deleteUserTypeByCode(req.body);
      res.send(result);
    }
  );
};
