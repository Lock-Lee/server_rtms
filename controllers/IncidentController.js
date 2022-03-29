const connect = require("../models/BaseModel");
const incident_model = require("../models/IncidentModel");

const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getIncidentLastCode = async function getIncidentLastCode(data) {
  const connection = await connect();

  const result = await incident_model.getIncidentLastCode(data, connection);

  connection.release();
  return result;
};

Task.getIncidentBy = async function getIncidentBy(data) {
  const connection = await connect();

  const result = await incident_model.getIncidentBy(data, connection);

  connection.release();
  return result;
};

Task.getIncidentByCode = async function getIncidentByCode(data) {
  const connection = await connect();

  const result = await incident_model.getIncidentByCode(data, connection);

  connection.release();
  return result;
};

Task.updateIncidentBy = async function updateIncidentBy(data) {
  const connection = await connect();
  const result = await incident_model.updateIncidentBy(data, connection);
  return result;
};

Task.insertIncident = async function insertIncident(data) {
  const connection = await connect();
  const result = await incident_model.insertIncident(data, connection);
  connection.release();
  return result;
};

Task.deleteIncidentByCode = async function deleteIncidentByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    // dalete row by user_group_code
    trans.result = await incident_model.deleteIncidentByCode(data, connection);

    return next(trans);
  });

  return result;
};

module.exports = Task;
