const { authJwt } = require("../middlewares");
const Incident_controller = require("../controllers/IncidentController");

module.exports = function (app) {
  app.post(
    "/incident/getIncidentLastCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.getIncidentLastCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/incident/getIncidentBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.getIncidentBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/incident/getIncidentByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.getIncidentByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/incident/insertIncident",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.insertIncident(req.body);
      res.send(result);
    }
  );

  app.post(
    "/incident/updateIncidentBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.updateIncidentBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/incident/deleteIncidentByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await Incident_controller.deleteIncidentByCode(req.body);
      res.send(result);
    }
  );
};
