const { authJwt } = require("../middlewares");
const UserGroup_controller = require("../controllers/UserGroupController");

module.exports = function (app) {
  app.post("/user-group/generateUserGroupLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await UserGroup_controller.getUserGroupLastCode(req.body);
    res.send(result);
  });

  app.post("/user-group/getUserGroupBy", authJwt.verifyToken, async function (req, res) {
    const result = await UserGroup_controller.getUserGroupBy(req.body);
    res.send(result);
  });

  app.post("/user-group/getUserGroupByCode", authJwt.verifyToken, async function (req, res) {
    const result = await UserGroup_controller.getUserGroupByCode(req.body);
    res.send(result);
  });

  app.post("/user-group/insertUserGroup", authJwt.verifyToken, async function (req, res) {
    const result = await UserGroup_controller.insertUserGroup(req.body);
    res.send(result);
  });

  app.post("/user-group/updateUserGroupBy", authJwt.verifyToken, async function (req, res) {
    const result = await UserGroup_controller.updateUserGroupBy(req.body);
    res.send(result);
  });

  app.post("/user-group/deleteUserGroupByCode", authJwt.verifyToken, async function (req, res) {
   
    const result = await UserGroup_controller.deleteUserGroupByCode(req.body);
    res.send(result);
  });
};
