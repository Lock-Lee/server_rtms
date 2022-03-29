const connect = require("../models/BaseModel")
const supplier_model = require("../models/SupplierModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getSupplierLastCode = async function getSupplierLastCode(data) {
  const connection = await connect()

  const result = await supplier_model.getSupplierLastCode(data, connection)

  connection.release()
  return result;
};

Task.getSupplierBy = async function getSupplierBy(data) {
  const connection = await connect()

  const result = await supplier_model.getSupplierBy(data, connection)

  connection.release()
  return result;
};

Task.getSupplierByCode = async function getSupplierByCode(data) {
  const connection = await connect()

  const result = await supplier_model.getSupplierByCode(data, connection)

  connection.release()
  return result;
};

Task.updateSupplierBy = async function updateSupplierBy(data) {
  const connection = await connect()
  const result = await supplier_model.updateSupplierBy(data,connection);
  return result;
};

Task.insertSupplier = async function insertSupplier(data) {
  const connection = await connect()
  const result = await supplier_model.insertSupplier(data,connection);
  connection.release()
  return result;
};

Task.deleteSupplierByCode = async function deleteSupplierByCode(data) {
  const connection = await connect()
  const result = await supplier_model.deleteSupplierByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

