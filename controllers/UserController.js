const connect = require("../models/BaseModel");

const user_model = require("../models/UserModel");
const UserLicenseGroup_model = require("../models/UserLicenseGroupModel");
const Task = function (task) {
  this.task = task.task;
};

Task.checkLogin = async function checkLogin(data) {
  const connection = await connect();

  const result = await user_model.checkLogin(data, connection);

  connection.release();
  return result;
};
Task.checkLoginRFID = async function checkLoginRFID(data) {
  const connection = await connect();

  const result = await user_model.checkLoginRFID(data, connection);

  connection.release();
  return result;
};
Task.getUserLastCode = async function getUserLastCode(data) {
  const connection = await connect();

  const result = await user_model.getUserLastCode(data, connection);

  connection.release();
  return result;
};
Task.getUserBy = async function getUserBy(data) {
  const connection = await connect();

  const result = await user_model.getUserBy(data, connection);

  connection.release();
  return result;
};
Task.getUserByCode = async function getUserByCode(data) {
  const connection = await connect();

  const result = await user_model.getUserByCode(data, connection);

  connection.release();
  return result;
};
Task.checkUsernameBy = async function checkUsernameBy(data) {
  const connection = await connect();

  const result = await user_model.checkUsernameBy(data, connection);

  connection.release();
  return result;
};
Task.updateUserBy = async function updateUserBy(data) {
  const connection = await connect();

  const result = await user_model.updateUserBy(data, connection);

  await UserLicenseGroup_model.deleteUserLicenseGroupCodeNotIn(
    data.user_code,
    connection
  );
  for (let index = 0; index < data.user_license_group.length; index++) {
    const result2 = await UserLicenseGroup_model.insertUserLicenseGroup(
      data.user_license_group[index],
      connection
    );
  }
  connection.release();
  return result;
};
Task.insertUser = async function insertUser(data) {
  const connection = await connect();

  const result = await user_model.insertUser(data, connection);

  for (let index = 0; index < data.user_license_group.length; index++) {
    const result2 = await UserLicenseGroup_model.insertUserLicenseGroup(
      data.user_license_group[index],
      connection
    );
  }

  connection.release();
  return result;
};
Task.deleteUserByCode = async function deleteUserByCode(data) {
  const connection = await connect();

  const result = await user_model.deleteUserByCode(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
