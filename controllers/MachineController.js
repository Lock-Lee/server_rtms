const connect = require("../models/BaseModel")
const machine_controller = require("../models/MachineModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getMachineLastCode = async function getMachineLastCode(data) {
  const connection = await connect()

  const result = await machine_controller.getMachineLastCode(data, connection)

  connection.release()
  return result;
};

Task.getMachineBy = async function getMachineBy(data) {
  const connection = await connect()

  const result = await machine_controller.getMachineBy(data, connection)

  connection.release()
  return result;
};

Task.getMachineByCode = async function getMachineByCode(data) {
  const connection = await connect()

  const result = await machine_controller.getMachineByCode(data, connection)

  connection.release()
  return result;
};

Task.updateMachineBy = async function updateMachineBy(data) {
  const connection = await connect()
  const result = await machine_controller.updateMachineBy(data,connection);
  return result;
};

Task.insertMachine = async function insertMachine(data) {
  const connection = await connect()
  const result = await machine_controller.insertMachine(data,connection);
  connection.release()
  return result;
};

Task.deleteMachineByCode = async function deleteMachineByCode(data) {
  const connection = await connect()
  const result = await machine_controller.deleteMachineByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

