const connect = require("../models/BaseModel")
const machinebrand_controller = require("../models/MachineBrandModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getMachineBrandLastCode = async function getMachineBrandLastCode(data) {
  const connection = await connect()

  const result = await machinebrand_controller.getMachineBrandLastCode(data, connection)

  connection.release()
  return result;
};

Task.getMachineBrandBy = async function getMachineBrandBy(data) {
  const connection = await connect()

  const result = await machinebrand_controller.getMachineBrandBy(data, connection)

  connection.release()
  return result;
};

Task.getMachineBrandByCode = async function getMachineBrandByCode(data) {
  const connection = await connect()

  const result = await machinebrand_controller.getMachineBrandByCode(data, connection)

  connection.release()
  return result;
};

Task.updateMachineBrandBy = async function updateMachineBrandBy(data) {
  const connection = await connect()
  const result = await machinebrand_controller.updateMachineBrandBy(data,connection);
  return result;
};

Task.insertMachineBrand = async function insertMachineBrand(data) {
  const connection = await connect()
  const result = await machinebrand_controller.insertMachineBrand(data,connection);
  connection.release()
  return result;
};

Task.deleteMachineBrandByCode = async function deleteMachineBrandByCode(data) {
  const connection = await connect()
  const result = await machinebrand_controller.deleteMachineBrandByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

