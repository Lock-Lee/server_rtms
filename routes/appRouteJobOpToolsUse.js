const { authJwt } = require("../middlewares");
const JobOpToolsUses_controller = require("../controllers/JobOptoolsUsesController");

module.exports = function (app) {
  app.post("/JobOpToolsUses/getJobOpToolsUsesLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await JobOpToolsUses_controller.getJobOpToolsUsesLastCode(req.body);
    res.send(result);
  });

  app.post("/JobOpToolsUses/getJobOpToolsUsesBy", authJwt.verifyToken, async function (req, res) {
    const result = await JobOpToolsUses_controller.getJobOpToolsUsesBy(req.body);
    res.send(result);
  });

  app.post("/JobOpToolsUses/getJobOpToolsUsesByCode", authJwt.verifyToken, async function (req, res) {
    const result = await JobOpToolsUses_controller.getJobOpToolsUsesByCode(req.body);
    res.send(result);
  });



  app.post("/JobOpToolsUses/updateJobOpToolsUsesBy", authJwt.verifyToken, async function (req, res) {
    const result = await JobOpToolsUses_controller.updateJobOpToolsUsesBy(req.body);
    res.send(result);
  });
  app.post("/JobOpToolsUses/insertJobOpToolsUses", authJwt.verifyToken, async function (req, res) {
  
    const result = await JobOpToolsUses_controller.insertJobOpToolsUses(req.body);
    res.send(result);
  });

  app.post("/JobOpToolsUses/deleteJobOpToolsUsesByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await JobOpToolsUses_controller.deleteJobOpToolsUsesByCode(req.body);
    res.send(result);
  });

};
