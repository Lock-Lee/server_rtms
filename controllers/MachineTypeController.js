const connect = require("../models/BaseModel")
const machinetype_controller = require("../models/MachineTypeModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getMachineTypeLastCode = async function getMachineTypeLastCode(data) {
  const connection = await connect()

  const result = await machinetype_controller.getMachineTypeLastCode(data, connection)

  connection.release()
  return result;
};

Task.getMachineTypeBy = async function getMachineTypeBy(data) {
  const connection = await connect()

  const result = await machinetype_controller.getMachineTypeBy(data, connection)

  connection.release()
  return result;
};

Task.getMachineTypeByCode = async function getMachineTypeByCode(data) {
  const connection = await connect()

  const result = await machinetype_controller.getMachineTypeByCode(data, connection)

  connection.release()
  return result;
};

Task.updateMachineTypeBy = async function updateMachineTypeBy(data) {
  const connection = await connect()
  const result = await machinetype_controller.updateMachineTypeBy(data,connection);
  return result;
};

Task.insertMachineType = async function insertMachineType(data) {
  const connection = await connect()
  const result = await machinetype_controller.insertMachineType(data,connection);
  connection.release()
  return result;
};

Task.deleteMachineTypeByCode = async function deleteMachineTypeByCode(data) {
  const connection = await connect()
  const result = await machinetype_controller.deleteMachineTypeByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

