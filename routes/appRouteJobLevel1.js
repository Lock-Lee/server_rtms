const { authJwt } = require("../middlewares");
const JobLevel1_controller = require("../controllers/JobLevel1Controller");

module.exports = function (app) {
  app.post(
    "/joblevel1/getJobLevel1Level1LastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.getJobLevel1LastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel1/getJobLevel1By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.getJobLevel1By(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel1/getJobLevel1ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.getJobLevel1ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel1/updateJobLevel1By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.updateJobLevel1By(req.body);
      res.send(result);
    }
  );
  app.post(
    "/joblevel1/insertJobLevel1",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.insertJobLevel1(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel1/deleteJobLevel1ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.deleteJobLevel1ByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel1/deleteJobLevel1ByCodeNotIn",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel1_controller.deleteJobLevel1ByCodeNotIn(
        req.body
      );
      res.send(result);
    }
  );
};
