const { authJwt } = require("../middlewares");
const machinebrand_controller = require("../controllers/MachineBrandController");

module.exports = function (app) {
  app.post("/machine-brand/generateMachineBrandLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinebrand_controller.getMachineBrandLastCode(req.body);
    res.send(result);
  });

  app.post("/machine-brand/getMachineBrandBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinebrand_controller.getMachineBrandBy(req.body);
    res.send(result);
  });

  app.post("/machine-brand/getMachineBrandByCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinebrand_controller.getMachineBrandByCode(req.body);
    res.send(result);
  });

  app.post("/machine-brand/insertMachineBrand", authJwt.verifyToken, async function (req, res) {
    const result = await machinebrand_controller.insertMachineBrand(req.body);
    res.send(result);
  });

  app.post("/machine-brand/updateMachineBrandBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinebrand_controller.updateMachineBrandBy(req.body);
    res.send(result);
  });

  app.post("/machine-brand/deleteMachineBrandByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await machinebrand_controller.deleteMachineBrandByCode(req.body);
    res.send(result);
  });
};
