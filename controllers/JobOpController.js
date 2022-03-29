const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const JobOp_model = require("../models/JobOpModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getJobOpLastCode = async function getJobOpLastCode(data) {
  const connection = await connect();

  const result = await JobOp_model.getJobOpLastCode(data, connection);

  connection.release();
  return result;
};

Task.getJobOpBy = async function getJobOpBy(data) {
  const connection = await connect();

  try {
    const result = await JobOp_model.getJobOpBy(data, connection);

    return result;
  } catch (e) {
    return e;
  }
};

Task.getJobOpByCode = async function getJobOpByCode(data) {
  const connection = await connect();

  const result = await JobOp_model.getJobOpByCode(data, connection);

  connection.release();
  return result;
};

Task.updateJobOpBy = async function updateJobOpBy(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await JobOp_model.updateJobOpBy(data, connection);

    return next(trans);
  });
  return result;
};

Task.insertJobOp = async function insertJobOp(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await JobOp_model.updateJobOpBy(data, connection);

    return next(trans);
  });

  return result;
};

Task.deleteJobOpByCode = async function deleteJobOpByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await JobOp_model.deleteJobOpByCode(data, connection);

    return next(trans);
  });
  return result;
};

module.exports = Task;
