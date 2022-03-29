const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const stock_layout_model = require("../models/StockLayoutModel");
const stocklog_model = require("../models/StockLogModel");
const TakeoutTool = require("../models/TakeoutToolModel");
const Task = function (task) {
  this.task = task.task;
};

Task.ReceiveTools = async function ReceiveTools(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran2 = await stocklog_model.insertStockLog(data, connection);
    trans.tran1 = await stock_layout_model.updateStockLayoutbyReseved(
      data,
      connection
    );
    trans.tran3 = await TakeoutTool.updateProductUnitNewData(data, connection);
    return next(trans);
  });
  return result;
};

module.exports = Task;
