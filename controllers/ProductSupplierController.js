const connect = require("../models/BaseModel")
const productsupplier_model = require("../models/ProductSupplierModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductSupplierLastCode = async function getProductSupplierLastCode(data) {
  const connection = await connect()

  const result = await productsupplier_model.getProductSupplierLastCode(data, connection)

  connection.release()
  return result;
};

Task.getProductSupplierBy = async function getProductSupplierBy(data) {
  const connection = await connect()

  const result = await productsupplier_model.getProductSupplierBy(data, connection)

  connection.release()
  return result;
};

Task.getProductSupplierByCode = async function getProductSupplierByCode(data) {
  const connection = await connect()

  const result = await productsupplier_model.getProductSupplierByCode(data, connection)

  connection.release()
  return result;
};

Task.saveProductSupplierBy = async function saveProductSupplierBy(data) {
  const connection = await connect()
  const result = await productsupplier_model.saveProductSupplierBy(data,connection);
  return result;
};

Task.updateProductSupplierBy = async function updateProductSupplierBy(data) {
  const connection = await connect()
  const result = await productsupplier_model.updateProductSupplierBy(data,connection);
  connection.release()
  return result;
};

Task.deleteProductSupplierByCodeNotIn = async function deleteProductSupplierByCodeNotIn(data) {
  const connection = await connect()
  const result = await productsupplier_model.deleteProductSupplierByCodeNotIn(data,connection);
  connection.release();
  return result;
};

Task.insertProductSupplier = async function insertProductSupplier(data) {
    const connection = await connect()
    const result = await productsupplier_model.insertProductSupplier(data,connection);
    connection.release();
    return result;
  };

  Task.createRowProductSupplier = async function createRowProductSupplier(data) {
    const connection = await connect()
    const result = await productsupplier_model.createRowProductSupplier(data,connection);
    connection.release();
    return result;
  };

  Task.deleteProductSupplierByCode = async function deleteProductSupplierByCode(data) {
    const connection = await connect()
    const result = await productsupplier_model.deleteProductSupplierByCode(data,connection);
    connection.release();
    return result;
  };

  Task.deleteProductSupplierByCodeNotIn = async function deleteProductSupplierByCodeNotIn(data) {
    const connection = await connect()
    const result = await productsupplier_model.deleteProductSupplierByCodeNotIn(data,connection);
    connection.release();
    return result;
  };
module.exports = Task

