const { authJwt } = require("../middlewares");
const Job_controller = require("../controllers/JobController");

module.exports = function (app) {
  app.post("/job/getJobLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await Job_controller.getJobLastCode(req.body);
    res.send(result);
  });

  app.post("/job/getJobBy", authJwt.verifyToken, async function (req, res) {
    const result = await Job_controller.getJobBy(req.body);
    res.send(result);
  });

  app.post("/job/getJobByCode", authJwt.verifyToken, async function (req, res) {
    const result = await Job_controller.getJobByCode(req.body);
    res.send(result);
  });



  app.post("/job/updateJobBy", authJwt.verifyToken, async function (req, res) {
    const result = await Job_controller.updateJobBy(req.body);
    res.send(result);
  });
  app.post("/job/insertJob", authJwt.verifyToken, async function (req, res) {
      
    const result = await Job_controller.insertJob(req.body);
    res.send(result);
  });

  app.post("/job/deleteJobByCode", authJwt.verifyToken, async function (req, res) {
   
    const result = await Job_controller.deleteJobByCode(req.body);
    res.send(result);
  });

  app.post("/job/deleteJobByCodeNotIn", authJwt.verifyToken, async function (req, res) {
  
    const result = await Job_controller.deleteJobByCodeNotIn(req.body);
    res.send(result);
  });
};
