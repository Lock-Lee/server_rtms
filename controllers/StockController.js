const connect = require("../models/BaseModel")
const stock_model = require("../models/StockModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getStockLastCode = async function getStockLastCode(data) {
  const connection = await connect()

  const result = await stock_model.getStockLastCode(data, connection)

  connection.release()
  return result;
};

Task.getStock = async function getStock(data) {

  const connection = await connect()

  const result = await stock_model.getStock(data, connection)

  connection.release()

  return result;
};

Task.getStockByCode = async function getStockByCode(data) {
  const connection = await connect()

  const result = await stock_model.getStockByCode(data, connection)

  connection.release()
  return result;
};

Task.insertStock = async function insertStock(data) {
  const connection = await connect()
  const result = await stock_model.insertStock(data, connection);
  connection.release()
  return result;
};



Task.updateStock = async function updateStock(data) {
  const connection = await connect()
  const result = await stock_model.updateStock(data, connection);
  return result;
};



Task.deleteStockByCode = async function deleteStockByCode(data) {
  const connection = await connect()
  const result = await stock_model.deleteStockByCode(data, connection);
  connection.release();
  return result;
};

module.exports = Task

