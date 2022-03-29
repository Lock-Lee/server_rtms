const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const return_model = require("../models/ReturnModel");
const return_list_model = require("../models/ReturnListModel");
const Task = function (task) {
  this.task = task.task;
};

Task.getReturnByUsercode = async function getReturnByUsercode(data) {
  const connection = await connect();

  const result = await return_model.getReturnByUsercode(data, connection);

  connection.release();
  return result;
};

Task.getReturnLastCode = async function getReturnLastCode(data) {
  const connection = await connect();

  const result = await return_model.getReturnLastCode(data, connection);

  connection.release();
  return result;
};

Task.insertReturn = async function insertReturn(data) {
  const now = new Date();

  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    data["user_code"] = data.return_list[0].user_code;

    trans.tran1 = await return_model.insertReturn(data, connection);

    let return_list = data.return_list;

    if (return_list.length > 0) {
      for (let index = 0; index < return_list.length; index++) {
        const last_code = await return_list_model.getReturnListLastCode(
          {
            code: `RLC${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 3,
          },
          connection
        );

        let new_data = [];

        (new_data["return_list_code"] = last_code.data),
          (new_data["return_code"] = return_list[index].stock_return_code),
          (new_data["return_list_status"] = "borrow"),
          (new_data["product_code"] = return_list[index].product_code),
          (new_data["product_status"] = "normal"),
          (trans.tran2 = await return_list_model.insertReturnList(
            new_data,
            connection
          ));
      }
    }

    return next(trans);
  });

  return result;
};

module.exports = Task;
