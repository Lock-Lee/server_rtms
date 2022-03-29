const connect = require("../models/BaseModel")
const usertype_model = require("../models/UserTypeModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getUserTypeLastCode = async function getUserTypeLastCode(data) {
  const connection = await connect()

  const result = await usertype_model.getUserTypeLastCode(data, connection)

  connection.release()
  return result;
};

Task.getUserTypeBy = async function getUserTypeBy(data) {
  const connection = await connect()

  const result = await usertype_model.getUserTypeBy(data, connection)

  connection.release()
  return result;
};

Task.getUserTypeByCode = async function getUserTypeByCode(data) {
  const connection = await connect()

  const result = await usertype_model.getUserTypeByCode(data, connection)

  connection.release()
  return result;
};

Task.updateUserTypeBy = async function updateUserTypeBy(data) {
  const connection = await connect()
  const result = await usertype_model.updateUserTypeBy(data,connection);
  return result;
};

Task.insertUserType = async function insertUserType(data) {
  const connection = await connect()
  const result = await usertype_model.insertUserType(data,connection);
  connection.release()
  return result;
};

Task.deleteUserTypeByCode = async function deleteUserTypeByCode(data) {
  const connection = await connect()
  const result = await usertype_model.deleteUserTypeByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

