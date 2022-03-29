const { authJwt } = require("../middlewares");
const TakeoutTool = require("../controllers/TakeoutToolController");

module.exports = function (app) {
  app.post(
    "/takeouttool/getJobOpByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getJobOpByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getMachineByJobOpCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getMachineByJobOpCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getProcressByJobOpCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getProcressByJobOpCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getToolUseByJobOpToolCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getToolUseByJobOpToolCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getStocklayoutByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getStocklayoutByProductCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/updateProductUnitByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.updateProductUnitByProductCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getProductByProductCodeAndName",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getProductByProductCodeAndName(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getJobByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getJobByProductCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/takeouttool/getOpByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getOpByProductCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/takeouttool/getMachineByOpcode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getMachineByOpcode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/getProcressByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getProcressByProductCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/takeouttool/getindexCompartfromFIFO",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.getindexCompartfromFIFO(req.body);
      res.send(result);
    }
  );

  app.post(
    "/takeouttool/updateproductbyissue",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await TakeoutTool.updateproductbyissue(req.body);
      res.send(result);
    }
  );
};
