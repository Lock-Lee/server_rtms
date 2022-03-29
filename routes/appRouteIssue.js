const { authJwt } = require("../middlewares");
const Issus_controller = require("../controllers/IssusController");

module.exports = function (app) {
  app.post(
    "/Issus/getIssusLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Issus_controller.getIssusLastCode(req.body);
      res.send(result);
    }
  );
  app.post("/Issus/getIssusBy", authJwt.verifyToken, async function (req, res) {
    const result = await Issus_controller.getIssusBy(req.body);
    res.send(result);
  });

  app.post(
    "/Issus/getIssusByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Issus_controller.getIssusByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/Issus/insertIssus",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Issus_controller.insertIssus(req.body);
      res.send(result);
    }
  );

  app.post(
    "/Issus/getIssusByUserCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Issus_controller.getIssusByUserCode(req.body);
      res.send(result);
    }
  );
};
