const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const joblevel1_model = require("../models/JobLevel1Model");

const Task = function (task) {
  this.task = task.task;
};

Task.getJobLevel1By = async function getJobLevel1By(data) {
  const connection = await connect();

  const result = await joblevel1_model.getJobLevel1By(data, connection);

  connection.release();
  return result;
};

Task.getJobLevel1ByCode = async function getJobLevel1ByCode(data) {};

Task.insertJobLevel1 = async function insertJobLevel1(data) {
  const connection = await connect();

  const result = await joblevel1_model.insertJobLevel1(data, connection);

  connection.release();
  return result;
};

Task.updateJobLevel1By = async function updateJobLevel1By(data) {
  const connection = await connect();

  const result = await joblevel1_model.updateJobLevel1By(data, connection);

  connection.release();
  return result;
};

Task.deleteJobLevel1ByCode = async function deleteJobLevel1ByCode(data) {
  const connection = await connect();

  const result = await joblevel1_model.deleteJobLevel1ByCode(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
