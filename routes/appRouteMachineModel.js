const { authJwt } = require("../middlewares");
const machinemodel_controller = require("../controllers/MachineModelController");

module.exports = function (app) {
  app.post("/machine-model/generateMachineModelLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinemodel_controller.getMachineModelLastCode(req.body);
    res.send(result);
  });

  app.post("/machine-model/getMachineModelBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinemodel_controller.getMachineModelBy(req.body);
    res.send(result);
  });

  app.post("/machine-model/getMachineModelByCode", authJwt.verifyToken, async function (req, res) {
    const result = await machinemodel_controller.getMachineModelByCode(req.body);
    res.send(result);
  });

  app.post("/machine-model/insertMachineModel", authJwt.verifyToken, async function (req, res) {
    const result = await machinemodel_controller.insertMachineModel(req.body);
    res.send(result);
  });

  app.post("/machine-model/updateMachineModelBy", authJwt.verifyToken, async function (req, res) {
    const result = await machinemodel_controller.updateMachineModelBy(req.body);
    res.send(result);
  });

  app.post("/machine-model/deleteMachineModelByCode", authJwt.verifyToken, async function (req, res) {

    const result = await machinemodel_controller.deleteMachineModelByCode(req.body);
    res.send(result);
  });
};
