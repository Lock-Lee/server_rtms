const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const product_model = require("../models/ProductModel");
const product_supplier_model = require("../models/ProductSupplierModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getProductLastCode = async function getProductLastCode(data) {
  const connection = await connect();

  const result = await product_model.getProductLastCode(data, connection);

  connection.release();
  return result;
};

Task.getProductBy = async function getProductBy(data) {
  const connection = await connect();

  const result = await product_model.getProductBy(data, connection);

  connection.release();
  return result;
};

Task.getProductByCode = async function getProductByCode(data) {
  const connection = await connect();

  const result = await product_model.getProductByCode(data, connection);

  connection.release();
  return result;
};

Task.updateProductBy = async function updateProductBy(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.updateProductBy(data, connection);

    // trans.tran2 = await product_supplier_model.updateProductSupplierBy(
    //   data,
    //   connection
    // );

    return next(trans);
  });
  return result;
};

Task.insertProduct = async function insertProduct(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.insertProduct(data, connection);

    // trans.tran2 = await product_supplier_model.insertProductSupplier(
    //   data,
    //   connection
    // );

    return next(trans);
  });
  return result;
};

Task.deleteProductByCode = async function deleteProductByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.del1 = await product_model.deleteProductByCode(data, connection);
    trans.tran1 = await product_supplier_model.deleteProductSupplierByCode(
      data,
      connection
    );

    return next(trans);
  });
  return result;
};
Task.getProductByGroup = async function getProductByGroup(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.getProductByGroup(data, connection);

    return next(trans);
  });
  return result;
};

Task.getProductALLByGroup = async function getProductALLByGroup(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.getProductALLByGroup(data, connection);

    return next(trans);
  });
  return result;
};

Task.getProductByType = async function getProductByType(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.getProductByType(data, connection);

    return next(trans);
  });
  return result;
};
Task.checkProductByTransaction = async function checkProductByTransaction(
  data
) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await product_model.checkProductByTransaction(
      data,
      connection
    );

    return next(trans);
  });
  return result;
};
module.exports = Task;
