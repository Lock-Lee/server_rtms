const connect = require("../models/BaseModel");
const stocklog_model = require("../models/StockLogModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getStockLogLastCode = async function getStockLogLastCode(data) {
  const connection = await connect();
  const result = await stocklog_model.getStockLogLastCode(data, connection);
  connection.release();
  return result;
};
Task.getStockLogByType = async function getStockLogByType(data) {
  const connection = await connect();
  const result = await stocklog_model.getStockLogByType(data, connection);
  connection.release();
  return result;
};

Task.insertStockLog = async function insertStockLog(data) {
  const connection = await connect();
  const result = await stocklog_model.insertStockLog(data, connection);

  connection.release();
  return result;
};

Task.getStockLogByIssueCode = async function getStockLogByIssueCode(data) {
  const connection = await connect();
  const result = await stocklog_model.getStockLogByIssueCode(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
