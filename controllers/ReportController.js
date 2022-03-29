const connect = require("../models/BaseModel");
const report_model = require("../models/ReportModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getReceiveReport = async function getReceiveReport(data) {
  const connection = await connect();
  const result = await report_model.getReceiveReport(data, connection);
  connection.release();
  return result;
};
Task.getIssueReport = async function getIssueReport(data) {
  const connection = await connect();
  const result = await report_model.getIssueReport(data, connection);
  connection.release();
  return result;
};

Task.getBalanceReport = async function getBalanceReport(data) {
  const connection = await connect();
  const result = await report_model.getBalanceReport(data, connection);

  connection.release();
  return result;
};

Task.getIncidentReport = async function getIncidentReport(data) {
  const connection = await connect();
  const result = await report_model.getIncidentReport(data, connection);

  connection.release();
  return result;
};

Task.getTransactionReport = async function getTransactionReport(data) {
  const connection = await connect();
  const result = await report_model.getTransactionReport(data, connection);

  connection.release();
  return result;
};

Task.getLowStockReport = async function getLowStockReport(data) {
  const connection = await connect();
  const result = await report_model.getLowStockReport(data, connection);

  connection.release();
  return result;
};

Task.getSettingReport = async function getSettingReport(data) {
  const connection = await connect();
  const result = await report_model.getSettingReport(data, connection);

  connection.release();
  return result;
};

Task.updateSettingReport = async function updateSettingReport(data) {
  const connection = await connect();
  const result = await report_model.updateSettingReport(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
