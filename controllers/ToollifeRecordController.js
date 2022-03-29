const connect = require("../models/BaseModel");
const toolsliferecord_model = require("../models/ToollifeRecordModel");

const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getToolsLifeRecordLastCode = async function getToolsLifeRecordLastCode(
  data
) {
  const connection = await connect();

  const result = await toolsliferecord_model.getToolsLifeRecordLastCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getToolsLifeRecordBy = async function getToolsLifeRecordBy(data) {
  const connection = await connect();

  const result = await toolsliferecord_model.getToolsLifeRecordBy(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getToolsLifeRecordByCode = async function getToolsLifeRecordByCode(data) {
  const connection = await connect();

  const result = await toolsliferecord_model.getToolsLifeRecordByCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.updateToolsLifeRecordBy = async function updateToolsLifeRecordBy(data) {
  const connection = await connect();
  const result = await toolsliferecord_model.updateToolsLifeRecordBy(
    data,
    connection
  );
  return result;
};

Task.insertToolsLifeRecord = async function insertToolsLifeRecord(data) {
  const connection = await connect();
  const result = await toolsliferecord_model.insertToolsLifeRecord(
    data,
    connection
  );
  connection.release();
  return result;
};

Task.deleteToolsLifeRecordByCode = async function deleteToolsLifeRecordByCode(
  data
) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    // dalete row by user_group_code
    trans.result = await toolsliferecord_model.deleteToolsLifeRecordByCode(
      data,
      connection
    );

    return next(trans);
  });

  return result;
};

module.exports = Task;
