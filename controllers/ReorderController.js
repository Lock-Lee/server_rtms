const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const reorder_model = require("../models/ReorderModel");
const reorderlist_model = require("../models/ReorderListModel");

const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReorderLastCode = async function getReorderLastCode(data) {
  const connection = await connect();

  const result = await reorder_model.getReorderLastCode(data, connection);

  connection.release();
  return result;
};

Task.getReorderBy = async function getReorderBy(data) {
  const connection = await connect();

  const result = await reorder_model.getReorderBy(data, connection);

  connection.release();
  return result;
};

Task.getReorderByCode = async function getReorderByCode(data) {
  const connection = await connect();

  const result = await reorder_model.getReorderByCode(data, connection);

  connection.release();
  return result;
};

Task.updateReorderBy = async function updateReorderBy(data) {
  const now = new Date();

  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await reorder_model.updateReorderBy(data, connection);

    let reorders_code = { reorders_code: data.reorders_code };

    const result = await reorderlist_model.getReorderListByReordersCode(
      reorders_code,
      connection
    );

    if (result.data.length > 0) {
      trans.tran2 = await reorderlist_model.deleteReorderListByCode(
        reorders_code,
        connection
      );

      for (let index = 0; index < data.product_list.length; index++) {
        const last_code = await reorderlist_model.getReorderListLastCode(
          {
            code: `ROL${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 3,
          },
          connection
        );

        data.product_list[index]["reoder_list_code"] = last_code.data;
        data.product_list[index]["reorders_code"] = data.reorders_code;
        data.product_list[index]["addby"] = data.addby;
        data.product_list[index]["adddate"] = data.adddate;
        data.product_list[index]["updateby"] = data.updateby;
        data.product_list[index]["lastupdate"] = data.lastupdate;

        trans.tran3 = await reorderlist_model.insertReorderList(
          data.product_list[index],
          connection
        );
      }
    } else if (result.data.length === 0) {
      for (let index = 0; index < data.product_list.length; index++) {
        const last_code = await reorderlist_model.getReorderListLastCode(
          {
            code: `ROL${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 3,
          },
          connection
        );

        data.product_list[index]["reoder_list_code"] = last_code.data;
        data.product_list[index]["reorders_code"] = data.reorders_code;
        data.product_list[index]["addby"] = data.addby;
        data.product_list[index]["adddate"] = data.adddate;

        trans.tran2 = await reorderlist_model.insertReorderList(
          data.product_list[index],
          connection
        );
      }
    }

    return next(trans);
  });

  return result;
};

Task.insertReorder = async function insertReorder(data) {
  const now = new Date();
  const result = await inTransaction(async (connection, next) => {
    const trans = [];
    trans.tran1 = await reorder_model.insertReorder(data, connection);
    for (let index = 0; index < data.product_list.length; index++) {
      const last_code = await reorderlist_model.getReorderListLastCode(
        {
          code: `ROL${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`,
          digit: 3,
        },
        connection
      );
      data.product_list[index]["reoder_list_code"] = last_code.data;
      data.product_list[index]["reorders_code"] = data.reorders_code;
      data.product_list[index]["addby"] = data.addby;
      data.product_list[index]["adddate"] = data.adddate;
      trans.tran2 = await reorderlist_model.insertReorderList(
        data.product_list[index],
        connection
      );
    }
    return next(trans);
  });
  return result;
};

Task.deleteReorderByCode = async function deleteReorderByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await reorder_model.deleteReorderByCode(data, connection);
    trans.tran2 = await reorderlist_model.deleteReorderListByCode(
      data,
      connection
    );

    return next(trans);
  });
  return result;
};

module.exports = Task;
