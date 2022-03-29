const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const joblevel2_model = require("../models/JobLevel2Model");
const joblevel1_model = require("../models/JobLevel1Model");

const Task = function (task) {
  this.task = task.task;
};
Task.getJobLevel2By = async function getJobLevel2By(data) {
  const connection = await connect();

  const result = await joblevel2_model.getJobLevel2By(data, connection);
  //const result = await joblevel1_model.getJobLevel1By(data, connection);
  connection.release();

  return result;
};

Task.getJobLevel2ByCode = async function getJobLevel2ByCode(data) {
  const connection = await connect();

  const result = await joblevel2_model.getJobLevel2ByCode(data, connection);

  connection.release();
  return result;
};

Task.insertJobLevel2 = async function insertJobLevel2(data) {
  const connection = await connect();

  const result = await joblevel2_model.insertJobLevel2(data, connection);

  connection.release();
  return result;
};

Task.updateJobLevel2By = async function updateJobLevel2By(data) {
  const connection = await connect();

  const result = await joblevel2_model.updateJobLevel2By(data, connection);

  connection.release();
  return result;
};

Task.deleteJobLevel2ByCode = async function deleteJobLevel2ByCode(data) {
  const connection = await connect();

  const result = await joblevel2_model.deleteJobLevel2ByCode(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
