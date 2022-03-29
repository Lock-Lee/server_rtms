const connect = require("../models/BaseModel")
const productgroup_model = require("../models/ProductGroupModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductGroupLastCode = async function getProductGroupLastCode(data) {
  const connection = await connect()

  const result = await productgroup_model.getProductGroupLastCode(data, connection)

  connection.release()
  return result;
};

Task.getProductGroupBy = async function getProductGroupBy(data) {
  const connection = await connect()

  const result = await productgroup_model.getProductGroupBy(data, connection)

  connection.release()
  return result;
};

Task.getProductGroupByCode = async function getProductGroupByCode(data) {
  const connection = await connect()

  const result = await productgroup_model.getProductGroupByCode(data, connection)

  connection.release()
  return result;
};

Task.updateProductGroupBy = async function updateProductGroupBy(data) {
  const connection = await connect()
  const result = await productgroup_model.updateProductGroupBy(data,connection);
  return result;
};

Task.insertProductGroup = async function insertProductGroup(data) {
  const connection = await connect()
  const result = await productgroup_model.insertProductGroup(data,connection);
  connection.release()
  return result;
};

Task.deleteProductGroupByCode = async function deleteProductGroupByCode(data) {
  const connection = await connect()
  const result = await productgroup_model.deleteProductGroupByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

