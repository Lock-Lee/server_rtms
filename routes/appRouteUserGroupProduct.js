const { authJwt } = require("../middlewares");
const UserGroupProduct_controller = require("../controllers/UserGroupProductController");

module.exports = function (app) {
  app.post(
    "/UserGroupProduct/getUserGroupProductByGroup",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await UserGroupProduct_controller.getUserGroupProductByGroup(req.body);
      res.send(result);
    }
  );

  app.post(
    "/UserGroupProduct/insertUserGroupProduct",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await UserGroupProduct_controller.insertUserGroupProduct(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/UserGroupProduct/deleteUserGroupProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await UserGroupProduct_controller.deleteUserGroupProductCodeNotIn(
          req.body
        );
      res.send(result);
    }
  );
  app.post(
    "/UserGroupProduct/getUserGroupProductByMutiGroup",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await UserGroupProduct_controller.getUserGroupProductByMutiGroup(
          req.body
        );
      res.send(result);
    }
  );
};
