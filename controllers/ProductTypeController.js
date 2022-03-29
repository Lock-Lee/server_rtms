const connect = require("../models/BaseModel")
const producttype_model = require("../models/ProductTypeModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductTypeLastCode = async function getProductTypeLastCode(data) {
  const connection = await connect()

  const result = await producttype_model.getProductTypeLastCode(data, connection)

  connection.release()
  return result;
};

Task.getProductTypeBy = async function getProductTypeBy(data) {
  const connection = await connect()

  const result = await producttype_model.getProductTypeBy(data, connection)

  connection.release()
  return result;
};

Task.getProductTypeByCode = async function getProductTypeByCode(data) {
  const connection = await connect()

  const result = await producttype_model.getProductTypeByCode(data, connection)

  connection.release()
  return result;
};

Task.updateProductTypeBy = async function updateProductTypeBy(data) {
  const connection = await connect()
  const result = await producttype_model.updateProductTypeBy(data,connection);
  return result;
};

Task.insertProductType = async function insertProductType(data) {
  const connection = await connect()
  const result = await producttype_model.insertProductType(data,connection);
  connection.release()
  return result;
};

Task.deleteProductTypeByCode = async function deleteProductTypeByCode(data) {
  const connection = await connect()
  const result = await producttype_model.deleteProductTypeByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

