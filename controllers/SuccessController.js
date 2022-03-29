const connect = require("../models/BaseModel");
const success_model = require("../models/SuccessModel");

const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getSuccessLastCode = async function getSuccessLastCode(data) {
  const connection = await connect();

  const result = await success_model.getSuccessLastCode(data, connection);

  connection.release();
  return result;
};

Task.getSuccessBy = async function getSuccessBy(data) {
  const connection = await connect();

  const result = await success_model.getSuccessBy(data, connection);

  connection.release();
  return result;
};

Task.getSuccessByCode = async function getSuccessByCode(data) {
  const connection = await connect();

  const result = await success_model.getSuccessByCode(data, connection);

  connection.release();
  return result;
};

Task.updateSuccessBy = async function updateSuccessBy(data) {
  const connection = await connect();
  const result = await success_model.updateSuccessBy(data, connection);
  return result;
};

Task.insertSuccess = async function insertSuccess(data) {
  const connection = await connect();
  const result = await success_model.insertSuccess(data, connection);
  connection.release();
  return result;
};

Task.deleteSuccessByCode = async function deleteSuccessByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    // dalete row by user_group_code
    trans.result = await success_model.deleteSuccessByCode(data, connection);

    return next(trans);
  });

  return result;
};

module.exports = Task;
