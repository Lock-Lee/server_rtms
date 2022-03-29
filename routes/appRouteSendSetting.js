const { authJwt } = require("../middlewares");
const send_setting_controller = require("../controllers/SendSettingController");
//awdasad
module.exports = function (app) {
  app.post("/send-setting/getSendSettingLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await send_setting_controller.getSendSettingLastCode(req.body);
    res.send(result);
  });

  app.post("/send-setting/getSendSettingBy", authJwt.verifyToken, async function (req, res) {
    const result = await send_setting_controller.getSendSettingBy(req.body);
    res.send(result);
  });

  app.post("/send-setting/getSendSettingByCode", authJwt.verifyToken, async function (req, res) {
    const result = await send_setting_controller.getSendSettingByCode(req.body);
    res.send(result);
  });

  app.post("/send-setting/insertSendSetting", authJwt.verifyToken, async function (req, res) {
    const result = await send_setting_controller.insertSendSetting(req.body);
    res.send(result);
  });

  app.post("/send-setting/updateSendSettingBy", authJwt.verifyToken, async function (req, res) {
    const result = await send_setting_controller.updateSendSettingBy(req.body);
    res.send(result);
  });

  app.post("/send-setting/deleteSendSettingByCode", authJwt.verifyToken, async function (req, res) {

    const result = await send_setting_controller.deleteSendSettingByCode(req.body);
    res.send(result);
  });
};
