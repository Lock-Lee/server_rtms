const { authJwt } = require("../middlewares");
const JobLevel2_controller = require("../controllers/JobLevel2Controller");

module.exports = function (app) {
  app.post(
    "/joblevel2/getJobLevel2By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel2_controller.getJobLevel2By(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel2/updateJobLevel2By",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel2_controller.updateJobLevel2By(req.body);
      res.send(result);
    }
  );
  app.post(
    "/joblevel2/insertJobLevel2",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel2_controller.insertJobLevel2(req.body);
      res.send(result);
    }
  );

  app.post(
    "/joblevel2/deleteJobLevel2ByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await JobLevel2_controller.deleteJobLevel2ByCode(req.body);
      res.send(result);
    }
  );
};
