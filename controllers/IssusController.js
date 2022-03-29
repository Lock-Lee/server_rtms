const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const Issus_model = require("../models/IssusModel");
const Issuslist_model = require("../models/IssusListModel");
const stocklog_model = require("../models/StockLogModel");
const Task = function (task) {
  this.task = task.task;
};

Task.getIssusLastCode = async function getIssusLastCode(data) {
  const connection = await connect();

  const result = await Issus_model.getIssusLastCode(data, connection);

  connection.release();
  return result;
};

Task.getIssusBy = async function getIssusBy(data) {
  const connection = await connect();

  const result = await Issus_model.getIssusBy(data, connection);

  connection.release();
  return result;
};

Task.getIssusByCode = async function getIssusByCode(data) {
  const connection = await connect();

  const result = await Issus_model.getIssusByCode(data, connection);

  connection.release();
  return result;
};

Task.insertIssus = async function insertIssus(data) {
  const now = new Date();

  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    data["user_code"] = data.Issue_list[0].user_code;

    trans.tran1 = await Issus_model.insertIssus(data, connection);

    let Issue_list = data.Issue_list;

    if (Issue_list.length > 0) {
      for (let index = 0; index < Issue_list.length; index++) {
        const last_code = await Issuslist_model.getIssusListLastCode(
          {
            code: `IC${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 3,
          },
          connection
        );

        let new_data = [];

        (new_data["isuse_list_code"] = last_code.data),
          (new_data["product_code"] = Issue_list[index].product_code),
          (new_data["issue_code"] = Issue_list[index].stock_issue_code),
          (new_data["isuse_list_qty"] = Issue_list[index].stock_qty),
          (new_data["addby"] = Issue_list[index].user_code),
          (new_data["adddate"] = data.issue_date),
          (trans.tran2 = await Issuslist_model.insertIssusList(
            new_data,
            connection
          ));
      }
    }

    return next(trans);
  });

  return result;
};

Task.getIssusByUserCode = async function getIssusByUserCode(data) {
  const connection = await connect();

  const result = await Issus_model.getIssusByUserCode(data, connection);

  connection.release();
  return result;
};

module.exports = Task;
