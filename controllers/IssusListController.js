const connect = require("../models/BaseModel");
const Issus_model = require("../models/IssusModel");
const Issuslist_model = require("../models/IssusListModel");
const Task = function (task) {
  this.task = task.task;
};

Task.getIssusListByIssussCode = async function getIssusListByIssussCode(data) {
  const connection = await connect();

  const result = await Issuslist_model.getIssusListByIssussCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.insertIssus = async function insertIssus(data) {
  const connection = await connect();

  const result = await Issus_model.insertIssus(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
