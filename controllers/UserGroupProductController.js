const connect = require("../models/BaseModel");
const usergroupproduct_model = require("../models/UserGroupProductModel");
const product_model = require("../models/ProductModel");
const inTransaction = require("../utils/inTransaction");
const Task = function (task) {
  this.task = task.task;
};

Task.getUserGroupProductByGroup = async function getUserGroupProductByGroup(
  data
) {
  const connection = await connect();

  let result = await usergroupproduct_model.getUserGroupProductByGroup(
    data,
    connection
  );

  return result;
};
Task.getUserGroupProductByMutiGroup =
  async function getUserGroupProductByMutiGroup(data) {
    const connection = await connect();

    const result = await usergroupproduct_model.getUserGroupProductByMutiGroup(
      data,
      connection
    );

    connection.release();
    return result;
  };

Task.insertUserGroupProduct = async function insertUserGroupProduct(data) {
  const now = new Date();
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.del = await usergroupproduct_model.deleteUserGroupProductCodeNotIn(
      data[0].user_group_code,
      connection
    );

    for (let index = 0; index < data.length; index++) {
      let last_code = await usergroupproduct_model.getUserGroupProductLastCode(
        {
          code: `GP${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`,
          digit: 4,
        },
        connection
      );
      data[index].user_group_product_code = last_code.data;

      trans.tran1 = await usergroupproduct_model.insertUserGroupProduct(
        data[index],
        connection
      );
    }

    return next(trans);
  });
  return result;
};

Task.deleteUserGroupProductCodeNotIn =
  async function deleteUserGroupProductCodeNotIn(data) {
    const now = new Date();
    const result = await inTransaction(async (connection, next) => {
      const trans = [];

      trans.tran1 =
        await usergroupproduct_model.deleteUserGroupProductCodeNotIn(
          data,
          connection
        );

      return next(trans);
    });
    return result;
  };
module.exports = Task;
