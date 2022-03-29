const connect = require("../models/BaseModel")
const productbrand_model = require("../models/ProductBrandModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductBrandLastCode = async function getProductBrandLastCode(data) {
  const connection = await connect()

  const result = await productbrand_model.getProductBrandLastCode(data, connection)

  connection.release()
  return result;
};

Task.getProductBrandBy = async function getProductBrandBy(data) {
  const connection = await connect()

  const result = await productbrand_model.getProductBrandBy(data, connection)

  connection.release()
  return result;
};

Task.getProductBrandByCode = async function getProductBrandByCode(data) {
  const connection = await connect()

  const result = await productbrand_model.getProductBrandByCode(data, connection)

  connection.release()
  return result;
};

Task.updateProductBrandBy = async function updateProductBrandBy(data) {
  const connection = await connect()
  const result = await productbrand_model.updateProductBrandBy(data,connection);
  return result;
};

Task.insertProductBrand = async function insertProductBrand(data) {
  const connection = await connect()
  const result = await productbrand_model.insertProductBrand(data,connection);
  connection.release()
  return result;
};

Task.deleteProductBrandByCode = async function deleteProductBrandByCode(data) {
  const connection = await connect()
  const result = await productbrand_model.deleteProductBrandByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

