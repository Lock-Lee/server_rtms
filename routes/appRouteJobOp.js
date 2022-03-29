const { authJwt } = require("../middlewares");
const JobOp_controller = require("../controllers/JobOpController");

module.exports = function (app) {
  app.post("/job-op/getJobOpLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await JobOp_controller.getJobOpLastCode(req.body);
    res.send(result);
  });

  app.post("/job-op/getJobOpBy", authJwt.verifyToken, async function (req, res) {

    const result = await JobOp_controller.getJobOpBy(req.body);


    res.send(result);
  });

  app.post("/job-op/getJobOpByCode", authJwt.verifyToken, async function (req, res) {
    const result = await JobOp_controller.getJobOpByCode(req.body);
    res.send(result);
  });



  app.post("/job-op/updateJobOpBy", authJwt.verifyToken, async function (req, res) {
    const result = await JobOp_controller.updateJobOpBy(req.body);
    res.send(result);
  });
  app.post("/job-op/insertJobOp", authJwt.verifyToken, async function (req, res) {
  
    const result = await JobOp_controller.insertJobOp(req.body);
    res.send(result);
  });

  app.post("/job-op/deleteJobOpByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await JobOp_controller.deleteJobOpByCode(req.body);
    res.send(result);
  });


};
