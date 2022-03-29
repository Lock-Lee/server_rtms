const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const joblevel2_model = require("../models/JobLevel3Model");
const joblevel1_model = require("../models/JobLevel1Model");

const Task = function (task) {
  this.task = task.task;
};
Task.getJobLevel3By = async function getJobLevel3By(data) {
  const connection = await connect();

  const result = await joblevel2_model.getJobLevel3By(data, connection);
  //const result = await joblevel1_model.getJobLevel1By(data, connection);
  connection.release();

  return result;
};

Task.getJobLevel3ByCode = async function getJobLevel3ByCode(data) {
  const connection = await connect();

  const result = await joblevel2_model.getJobLevel3ByCode(data, connection);

  connection.release();
  return result;
};

Task.insertJobLevel3 = async function insertJobLevel3(data) {
  const connection = await connect();

  const result = await joblevel2_model.insertJobLevel3(data, connection);

  connection.release();
  return result;
};

Task.updateJobLevel3By = async function updateJobLevel3By(data) {};

Task.deleteJobLevel3ByCode = async function deleteJobLevel3ByCode(data) {};

module.exports = Task;
