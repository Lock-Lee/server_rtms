const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const joblevel1_model = require("../models/JobLevel4Model");

const Task = function (task) {
  this.task = task.task;
};

Task.getJobLevel4By = async function getJobLevel4By(data) {
  const connection = await connect();

  const result = await joblevel1_model.getJobLevel4By(data, connection);

  connection.release();
  return result;
};

Task.getJobLevel4ByCode = async function getJobLevel4ByCode(data) {};

Task.insertJobLevel4 = async function insertJobLevel4(data) {
  const connection = await connect();

  const result = await joblevel1_model.insertJobLevel4(data, connection);

  connection.release();
  return result;
};

Task.updateJobLevel4By = async function updateJobLevel4By(data) {
  const connection = await connect();

  const result = await joblevel1_model.updateJobLevel4By(data, connection);

  connection.release();
  return result;
};

Task.deleteJobLevel4ByCode = async function deleteJobLevel4ByCode(data) {};

module.exports = Task;
