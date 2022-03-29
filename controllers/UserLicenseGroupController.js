const connect = require("../models/BaseModel");

const userlcense_group_model = require("../models/UserLicenseGroupModel");
const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getUserLicenseGroupByCode = async function getUserLicenseGroupByCode(
  data
) {
  const connection = await connect();

  const result = await userlcense_group_model.getUserLicenseGroupByCode(
    data,
    connection
  );

  connection.release();
  return result;
};
Task.insertUserLicenseGroup = async function insertUserLicenseGroup(data) {
  const connection = await connect();

  const result = await userlcense_group_model.insertUserLicenseGroup(
    data,
    connection
  );

  connection.release();
  return result;
};
Task.deleteUserLicenseGroupByCode = async function deleteUserLicenseGroupByCode(
  data
) {
  const connection = await connect();

  const result = await userlcense_group_model.deleteUserLicenseGroupByCode(
    data,
    connection
  );

  connection.release();
  return result;
};
module.exports = Task;
