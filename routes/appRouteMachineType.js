const { authJwt } = require("../middlewares");
const machinetype_controller = require("../controllers/MachineTypeController");

module.exports = function (app) {
  app.post("/machine-type/getMachineTypeLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinetype_controller.getMachineTypeLastCode(req.body);
    res.send(result);
  });

  app.post("/machine-type/getMachineTypeBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinetype_controller.getMachineTypeBy(req.body);
    res.send(result);
  });

  app.post("/machine-type/getMachineTypeByCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinetype_controller.getMachineTypeByCode(req.body);
    res.send(result);
  });

  app.post("/machine-type/insertMachineType", authJwt.verifyToken, async function (req, res) {
    const result = await machinetype_controller.insertMachineType(req.body);
    res.send(result);
  });

  app.post("/machine-type/updateMachineTypeBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinetype_controller.updateMachineTypeBy(req.body);
    res.send(result);
  });

  app.post("/machine-type/deleteMachineTypeByCode", authJwt.verifyToken, async function (req, res) {

    const result = await machinetype_controller.deleteMachineTypeByCode(req.body);
    res.send(result);
  });
};
