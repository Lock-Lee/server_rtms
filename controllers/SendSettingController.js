const connect = require("../models/BaseModel")
const send_setting_model = require("../models/SendSettingModel");
const send_setting_list_model = require("../models/SendSettingListModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getSendSettingLastCode = async function getSendSettingLastCode(data) {
  const connection = await connect()

  let result = await send_setting_model.getSendSettingLastCode(data, connection)

  connection.release()
  return result;
};

Task.getSendSettingBy = async function getSendSettingBy(data) {
  const connection = await connect()

  let result = await send_setting_model.getSendSettingBy(data, connection)

  connection.release()
  return result;
};

Task.getSendSettingByCode = async function getSendSettingByCode(data) {
  const connection = await connect()

  let result = await send_setting_model.getSendSettingByCode(data, connection)
  if (result.data.length > 0) {
    const list = await send_setting_list_model.getSendSettingListBy(data, connection)
    result.data[0].send_setting_list = list.data
  }

  connection.release()
  return result;
};

Task.updateSendSettingBy = async function updateSendSettingBy(data) {
  const connection = await connect()
  const result = await send_setting_model.updateSendSettingBy(data, connection);

  await send_setting_list_model.deleteSendSettingListBy(data, connection);
  for (let index = 0; index < data.send_setting_list.length; index++) {
    let element = data.send_setting_list[index];
    element.send_setting_code = data.send_setting_code
    await send_setting_list_model.insertSendSettingList(element, connection);
  }
  connection.release()

  return result;
};

Task.insertSendSetting = async function insertSendSetting(data) {
  const connection = await connect()
  const result = await send_setting_model.insertSendSetting(data, connection);
  for (let index = 0; index < data.send_setting_list.length; index++) {
    let element = data.send_setting_list[index];
    element.send_setting_code = data.send_setting_code
    await send_setting_list_model.insertSendSettingList(element, connection);
  }
  connection.release()
  return result;
};

Task.deleteSendSettingByCode = async function deleteSendSettingByCode(data) {
  const connection = await connect()
  const result = await send_setting_model.deleteSendSettingByCode(data, connection);
  await send_setting_list_model.deleteSendSettingListBy(data, connection);
  connection.release();
  return result;
};

module.exports = Task

