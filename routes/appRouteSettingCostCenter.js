const { authJwt } = require("../middlewares");
const SettingCostCenterController = require("../controllers/SettingCostCenterController");

module.exports = function (app) {
  app.post("/settingcostcenter/getsettingcostcenter", authJwt.verifyToken, async function (req, res) {
    const result = await SettingCostCenterController.getsettingcostcenter(req.body);
    res.send(result);
  });

  app.post("/settingcostcenter/updatesettingcostcenter", authJwt.verifyToken, async function (req, res) {
    const result = await SettingCostCenterController.updatesettingcostcenter(req.body);
    res.send(result);
  });

};
