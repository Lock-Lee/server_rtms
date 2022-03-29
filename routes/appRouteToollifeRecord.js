const { authJwt } = require("../middlewares");
const toolsliferecord_controller = require("../controllers/ToollifeRecordController");

module.exports = function (app) {
  app.post(
    "/tools-life-record/getToolsLifeRecordLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await toolsliferecord_controller.getToolsLifeRecordLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/tools-life-record/getToolsLifeRecordBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await toolsliferecord_controller.getToolsLifeRecordBy(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/tools-life-record/getToolsLifeRecordByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await toolsliferecord_controller.getToolsLifeRecordByCode(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/tools-life-record/insertToolsLifeRecord",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await toolsliferecord_controller.insertToolsLifeRecord(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/tools-life-record/updateToolsLifeRecordBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await toolsliferecord_controller.updateToolsLifeRecordBy(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/tools-life-record/deleteToolsLifeRecordByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await toolsliferecord_controller.deleteToolsLifeRecordByCode(req.body);
      res.send(result);
    }
  );
};
