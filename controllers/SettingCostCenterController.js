const connect = require("../models/BaseModel");
// const inTransaction = require("../utils/inTransaction");
const SettingCostCenterModel = require("../models/SettingCostCenterModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getsettingcostcenter = async function getsettingcostcenter(data) {
  const connection = await connect();

  const result = await SettingCostCenterModel.getsettingcostcenter(data, connection);

  connection.release();
  return result;
};

Task.updatesettingcostcenter = async function updatesettingcostcenter(data) {
  const connection = await connect();

  const result = await SettingCostCenterModel.updatesettingcostcenter(data, connection);

  connection.release();
  return result;
};


module.exports = Task;
