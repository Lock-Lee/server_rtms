const connect = require("../models/BaseModel");
const usergroup_model = require("../models/UserGroupModel");
const IssueRestriction_model = require("../models/UserGroupProductModel");
const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getUserGroupLastCode = async function getUserGroupLastCode(data) {
  const connection = await connect();

  const result = await usergroup_model.getUserGroupLastCode(data, connection);

  connection.release();
  return result;
};

Task.getUserGroupBy = async function getUserGroupBy(data) {
  const connection = await connect();

  const result = await usergroup_model.getUserGroupBy(data, connection);

  connection.release();
  return result;
};

Task.getUserGroupByCode = async function getUserGroupByCode(data) {
  const connection = await connect();

  const result = await usergroup_model.getUserGroupByCode(data, connection);

  connection.release();
  return result;
};

Task.updateUserGroupBy = async function updateUserGroupBy(data) {
  const connection = await connect();
  const result = await usergroup_model.updateUserGroupBy(data, connection);
  return result;
};

Task.insertUserGroup = async function insertUserGroup(data) {
  const connection = await connect();
  const result = await usergroup_model.insertUserGroup(data, connection);
  connection.release();
  return result;
};

Task.deleteUserGroupByCode = async function deleteUserGroupByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    // dalete row by user_group_code
    trans.result = await usergroup_model.deleteUserGroupByCode(
      data,
      connection
    );
    trans.del = await IssueRestriction_model.deleteUserGroupProductCodeNotIn(
      data,
      connection
    );

    return next(trans);
  });

  return result;
};

module.exports = Task;
