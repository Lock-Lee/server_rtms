const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const TakeoutTool = require("../models/TakeoutToolModel");
const stock_layout_model = require("../models/StockLayoutModel");
const product_model = require("../models/ProductModel");
const stock_log = require("../models/StockLogModel");
const return_model = require("../models/ReturnModel");
const issue_list_model = require("../models/IssusListModel");
const issue_model = require("../models/IssusModel");

const send_report = require("../controllers/EmailController");
const Task = function (task) {
  this.task = task.task;
};

Task.getJobOpByCode = async function getJobOpByCode(data) {
  const connection = await connect();

  const result = await TakeoutTool.getJobOpByCode(data, connection);

  connection.release();

  return result;
};

Task.getMachineByJobOpCode = async function getMachineByJobOpCode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getMachineByJobOpCode(data, connection);
  connection.release();
  return result;
};
Task.getProcressByJobOpCode = async function getProcressByJobOpCode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getProcressByJobOpCode(data, connection);
  connection.release();

  return result;
};

Task.getToolUseByJobOpToolCode = async function getToolUseByJobOpToolCode(
  data
) {
  const connection = await connect();
  const result = await TakeoutTool.getToolUseByJobOpToolCode(data, connection);
  connection.release();
  return result;
};

Task.getStocklayoutByProductCode = async function getStocklayoutByProductCode(
  data
) {
  const connection = await connect();
  const result = await TakeoutTool.getStocklayoutByProductCode(
    data,
    connection
  );
  connection.release();
  return result;
};

Task.getProductByProductCodeAndName =
  async function getProductByProductCodeAndName(data) {
    const connection = await connect();
    const result = await TakeoutTool.getProductByProductCodeAndName(
      data,
      connection
    );
    connection.release();

    return result;
  };

Task.updateProductUnitByProductCode =
  async function updateProductUnitByProductCode(data) {
    const result = await inTransaction(async (connection, next) => {
      const trans = [];
      trans.tran1 = await TakeoutTool.updateProductUnitByProductCode(
        data,
        connection
      );
      trans.tran2 = await TakeoutTool.updateProductUnitNewData(
        data,
        connection
      );
      return next(trans);
    });
    return result;
  };

Task.getJobByProductCode = async function getJobByProductCode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getJobByProductCode(data, connection);
  connection.release();

  return result;
};

Task.getOpByProductCode = async function getOpByProductCode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getOpByProductCode(data, connection);
  connection.release();

  return result;
};

Task.getMachineByOpcode = async function getMachineByOpcode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getMachineByOpcode(data, connection);
  connection.release();

  return result;
};

Task.getProcressByProductCode = async function getProcressByProductCode(data) {
  const connection = await connect();
  const result = await TakeoutTool.getProcressByProductCode(data, connection);
  connection.release();

  return result;
};

Task.getindexCompartfromFIFO = async function getindexCompartfromFIFO(data) {
  const connection = await connect();
  const result = await TakeoutTool.getindexCompartfromFIFO(data, connection);
  connection.release();

  return result;
};

Task.updateproductbyissue = async function updateProductUnitByProductCode(
  data
) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    const now = new Date();

    if (data.TypeComp == "New" || data.TypeComp == "RF") {
      const last_code = await issue_model.getIssusLastCode(
        {
          code: `IC${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`,
          digit: 3,
        },
        connection
      );

      data["stock_issue_code"] = last_code.data;
      data["stock_return_code"] = " ";
    } else if (data.TypeComp == "Loan") {
      const last_code = await return_model.getReturnLastCode(
        {
          code: `RTC${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`,
          digit: 3,
        },
        connection
      );

      data["stock_return_code"] = last_code.data;
      data["stock_issue_code"] = " ";
    }

    trans.tran1 = await stock_layout_model.updatestocklayqtybyissue(
      data,
      connection
    );
    trans.tran2 = await product_model.updateProductByissue(data, connection);
    trans.tran3 = await stock_log.insertStockLog(data, connection);

    // trans.tran4 = await stock_log.insertStockLog(data, connection);
    // trans.tran5 = await stock_log.insertStockLog(data, connection);

    return next(trans);
  });

  send_report.sendIssueEmail(data);
  return result;
};

module.exports = Task;
