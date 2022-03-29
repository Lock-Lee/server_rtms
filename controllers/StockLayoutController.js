const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const stock_layout_model = require("../models/StockLayoutModel");

const Task = function (task) {
  this.task = task.task;
};

Task.generateClassByStockLayoutCode =
  async function generateClassByStockLayoutCode(data) {
    const connection = await connect();

    const result = await stock_layout_model.generateClassByStockLayoutCode(
      data,
      connection
    );

    connection.release();

    return result;
  };

Task.getStockLayout = async function getStockLayout(data) {
  const connection = await connect();

  const result = await stock_layout_model.getStockLayout(data, connection);

  connection.release();

  return result;
};
Task.getStockLayoutByGroup = async function getStockLayoutByGroup(data) {
  const connection = await connect();

  const result = await stock_layout_model.getStockLayoutByGroup(
    data,
    connection
  );

  connection.release();

  return result;
};

Task.insertStockLayoutCode = async function insertStockLayoutCode(data) {
  const connection = await connect();
  const result = await stock_layout_model.insertStockLayoutCode(
    data,
    connection
  );
  connection.release();
  return result;
};

Task.updateStockLayout = async function updateStockLayout(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];
    for (let update_slot of data.update_slot) {
      trans.tran1 = await stock_layout_model.updateStockLayout(
        update_slot,
        connection
      );
    }
    return next(trans);
  });
  return result;
};

Task.deleteStockLayoutByStockYCode =
  async function deleteStockLayoutByStockYCode(data) {
    const connection = await connect();
    const result = await stock_layout_model.deleteStockLayoutByStockYCode(
      data,
      connection
    );
    connection.release();
    return result;
  };

Task.getProductBy = async function getProductBy(data) {
  const connection = await connect();

  const result = await stock_layout_model.getProductBy(data, connection);

  connection.release();

  return result;
};

Task.getSuppliersBy = async function getSuppliersBy(data) {
  const connection = await connect();

  const result = await stock_layout_model.getSuppliersBy(data, connection);

  connection.release();

  return result;
};

Task.getSuppliersByProductCode = async function getSuppliersByProductCode(
  data
) {
  const connection = await connect();

  const result = await stock_layout_model.getSuppliersByProductCode(
    data,
    connection
  );

  connection.release();

  return result;
};
Task.getCountReserve = async function getCountReserve(data) {
  const connection = await connect();

  const result = await stock_layout_model.getCountReserve(data, connection);

  connection.release();

  return result;
};
Task.getResevedSlotbyCode = async function getResevedSlotbyCode(data) {
  const connection = await connect();
  const result = await stock_layout_model.getResevedSlotbyCode(
    data,
    connection
  );

  connection.release();

  return result;
};
Task.getMaxSlotbyCode = async function getMaxSlotbyCode(data) {
  const connection = await connect();
  const result = await stock_layout_model.getMaxSlotbyCode(data, connection);

  connection.release();

  return result;
};

Task.getMaxSlotisCode = async function getMaxSlotisCode(data) {
  const connection = await connect();

  const result = await stock_layout_model.getMaxSlotisCode(data, connection);

  connection.release();

  return result;
};
Task.getMaxSlotisResevedbyCode = async function getMaxSlotisResevedbyCode(
  data
) {
  const connection = await connect();

  const result = await stock_layout_model.getMaxSlotisResevedbyCode(
    data,
    connection
  );

  connection.release();

  return result;
};

Task.getCountReserveBycode = async function getCountReserveBycode(data) {
  const connection = await connect();
  const result = await stock_layout_model.getCountReserveBycode(
    data,
    connection
  );
  connection.release();
  return result;
};
Task.getRemainSlotbyCode = async function getRemainSlotbyCode(data) {
  const connection = await connect();
  const result = await stock_layout_model.getRemainSlotbyCode(data, connection);
  connection.release();
  return result;
};
Task.getSlotisNull = async function getSlotisNull(data) {
  const connection = await connect();
  const result = await stock_layout_model.getSlotisNull(data, connection);
  connection.release();
  return result;
};
Task.getResevedSlotisNull = async function getResevedSlotisNull(data) {
  const connection = await connect();
  const result = await stock_layout_model.getResevedSlotisNull(
    data,
    connection
  );
  connection.release();
  return result;
};
module.exports = Task;
