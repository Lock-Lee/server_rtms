const { authJwt } = require("../middlewares");
const UserlicenseGroup_controller = require("../controllers/UserLicenseGroupController");

module.exports = function (app) {
  app.post(
    "/user-license-group/getUserLicenseGroupByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await UserlicenseGroup_controller.getUserLicenseGroupByCode(req.body);
      res.send(result);
    }
  );
};
