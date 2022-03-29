const connect = require("../models/BaseModel");
const incident_type_model = require("../models/IncidentTypeModel");

const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getIncidentTypeLastCode = async function getIncidentTypeLastCode(data) {
  const connection = await connect();

  const result = await incident_type_model.getIncidentTypeLastCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getIncidentTypeBy = async function getIncidentTypeBy(data) {
  const connection = await connect();

  const result = await incident_type_model.getIncidentTypeBy(data, connection);

  connection.release();
  return result;
};

Task.getIncidentTypeByCode = async function getIncidentTypeByCode(data) {
  const connection = await connect();

  const result = await incident_type_model.getIncidentTypeByCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.updateIncidentTypeBy = async function updateIncidentTypeBy(data) {
  const connection = await connect();
  const result = await incident_type_model.updateIncidentTypeBy(
    data,
    connection
  );
  return result;
};

Task.insertIncidentType = async function insertIncidentType(data) {
  const connection = await connect();
  const result = await incident_type_model.insertIncidentType(data, connection);
  connection.release();
  return result;
};

Task.deleteIncidentTypeByCode = async function deleteIncidentTypeByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.result = await incident_type_model.deleteIncidentTypeByCode(
      data,
      connection
    );

    return next(trans);
  });

  return result;
};

module.exports = Task;
