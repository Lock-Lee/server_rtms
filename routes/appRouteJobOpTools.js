const { authJwt } = require("../middlewares");
const JobOpTools_controller = require("../controllers/JobOptoolsController");

module.exports = function (app) {
  app.post(
    "/JobOpTools/getJobOPToolsLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.getJobOpToolsLastCode(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/JobOpTools/getJobOPToolsBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.getJobOpToolsBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/JobOpTools/getJobOPToolsByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.getJobOpToolsByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/JobOpTools/updateJobOPToolsBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.updateJobOpToolsBy(req.body);
      res.send(result);
    }
  );
  app.post(
    "/JobOpTools/insertJobOPTools",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.insertJobOpTools(req.body);
      res.send(result);
    }
  );

  app.post(
    "/JobOpTools/deleteJobOPToolsByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobOpTools_controller.deleteJobOpToolsByCode(
        req.body
      );
      res.send(result);
    }
  );
};
