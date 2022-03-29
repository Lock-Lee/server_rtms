const { authJwt } = require("../middlewares");
const machine_controller = require("../controllers/MachineController");

module.exports = function (app) {

  app.post("/machine/getMachineLastCode", authJwt.verifyToken, async function (req, res) {
   
    const result = await machine_controller.getMachineLastCode(req.body);
    res.send(result);
  });

  app.post("/machine/getMachineBy", authJwt.verifyToken, async function (req, res) {
    const result = await machine_controller.getMachineBy(req.body);
    res.send(result);
  });

  app.post("/machine/getMachineByCode", authJwt.verifyToken, async function (req, res) {
    const result = await machine_controller.getMachineByCode(req.body);
    res.send(result);
  });

  app.post("/machine/insertMachine", authJwt.verifyToken, async function (req, res) {

    const result = await machine_controller.insertMachine(req.body);
    res.send(result);
  });

  app.post("/machine/updateMachineBy", authJwt.verifyToken, async function (req, res) {
    const result = await machine_controller.updateMachineBy(req.body);
    res.send(result);
  });

  app.post("/machine/deleteMachineByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await machine_controller.deleteMachineByCode(req.body);
    res.send(result);
  });
};
