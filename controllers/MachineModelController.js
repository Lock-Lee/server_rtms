const connect = require("../models/BaseModel")
const machinemodel_controller = require("../models/MachineModelModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getMachineModelLastCode = async function getMachineModelLastCode(data) {
  const connection = await connect()

  const result = await machinemodel_controller.getMachineModelLastCode(data, connection)

  connection.release()
  return result;
};

Task.getMachineModelBy = async function getMachineModelBy(data) {
  const connection = await connect()

  const result = await machinemodel_controller.getMachineModelBy(data, connection)

  connection.release()
  return result;
};

Task.getMachineModelByCode = async function getMachineModelByCode(data) {
  const connection = await connect()

  const result = await machinemodel_controller.getMachineModelByCode(data, connection)

  connection.release()
  return result;
};

Task.updateMachineModelBy = async function updateMachineModelBy(data) {
  const connection = await connect()
  const result = await machinemodel_controller.updateMachineModelBy(data,connection);
  return result;
};

Task.insertMachineModel = async function insertMachineModel(data) {
  const connection = await connect()
  const result = await machinemodel_controller.insertMachineModel(data,connection);
  connection.release()
  return result;
};

Task.deleteMachineModelByCode = async function deleteMachineModelByCode(data) {
  const connection = await connect()
  const result = await machinemodel_controller.deleteMachineModelByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

