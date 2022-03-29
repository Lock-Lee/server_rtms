const { authJwt } = require("../middlewares");
const JobLevel3_controller = require("../controllers/JobLevel3Controller");

module.exports = function (app) {
  app.post(
    "/joblevel3/getJobLevel3By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.getJobLevel3By(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel3/getJobLevel3ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.getJobLevel3ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel3/updateJobLevel3By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.updateJobLevel3By(req.body);
      res.send(result);
    }
  );
  app.post(
    "/joblevel3/insertJobLevel3",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.insertJobLevel3(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel3/deleteJobLevel3ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.deleteJobLevel3ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel3/deleteJobLevel3ByCodeNotIn",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel3_controller.deleteJobLevel3ByCodeNotIn(
        req.body
      );
      res.send(result);
    }
  );
};
