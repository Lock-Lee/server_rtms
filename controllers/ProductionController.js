const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");

const Productionion_model = require("../models/ProductionModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductionLastCode = async function getProductionionLastCode(data) {
  const connection = await connect();

  const result = await Productionion_model.getProductionLastCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getProductionBy = async function getProductionBy(data) {
  const connection = await connect();

  const result = await Productionion_model.getProductionBy(data, connection);

  connection.release();
  return result;
};

Task.getProductionByCode = async function getProductionByCode(data) {
  const connection = await connect();

  const result = await Productionion_model.getProductionByCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.updateProductionBy = async function updateProductionBy(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await Productionion_model.updateProductionBy(
      data,
      connection
    );

    return next(trans);
  });
  return result;
};

Task.insertProduction = async function insertProduction(data) {
  const connection = await connect();

  const result = await Productionion_model.insertProduction(data, connection);

  connection.release();
  return result;
};

Task.deleteProductionByCode = async function deleteProductionByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.del1 = await Productionion_model.deleteProductionByCode(
      data,
      connection
    );

    return next(trans);
  });
  return result;
};

module.exports = Task;
