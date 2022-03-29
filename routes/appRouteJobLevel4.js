const { authJwt } = require("../middlewares");
const JobLevel4_controller = require("../controllers/JobLevel4Controller");

module.exports = function (app) {
  app.post(
    "/joblevel4/getJobLevel4By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.getJobLevel4By(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel4/getJobLevel4ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.getJobLevel4ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel4/updateJobLevel4By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.updateJobLevel4By(req.body);
      res.send(result);
    }
  );
  app.post(
    "/joblevel4/insertJobLevel4",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.insertJobLevel4(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel4/deleteJobLevel4ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.deleteJobLevel4ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel4/deleteJobLevel4ByCodeNotIn",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel4_controller.deleteJobLevel4ByCodeNotIn(
        req.body
      );
      res.send(result);
    }
  );
};
