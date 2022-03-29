const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const DefaultTime_model = require("../models/DefaulttimeModel");

const Task = function (task) {
  this.task = task.task;
};

Task.insertDefaultTime = async function insertDefaultTime(data) {
  const connection = await connect();

  const result = await DefaultTime_model.insertDefaultTime(data, connection);

  connection.release();
  return result;
};

Task.getDefaultTime = async function getDefaultTime(data) {
  const connection = await connect();

  const result = await DefaultTime_model.getDefaultTime(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
