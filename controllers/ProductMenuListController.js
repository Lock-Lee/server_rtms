const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const productmenulist_model = require("../models/ProductMenuListModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getproductMenuListBy = async function getproductMenuListBy(data) {
  const connection = await connect();

  const result = await productmenulist_model.getproductMenuListBy(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getproductMenuListByCode = async function getproductMenuListByCode(data) {
  const connection = await connect();

  const result = await productmenulist_model.getproductMenuListByCode(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.getProductByProductMenuName = async function getProductByProductMenuName(
  data
) {
  const connection = await connect();

  const result = await productmenulist_model.getProductByProductMenuName(
    data,
    connection
  );

  connection.release();
  return result;
};

Task.InsertORUpdateProductListMenu =
  async function InsertORUpdateProductListMenu(data) {
    const result = await inTransaction(async (connection, next) => {
      const result = await productmenulist_model.getproductMenuListByCode(
        data[0],
        connection
      );
      const trans = [];

      if (result.data.length > 0) {
        trans.tran1 = await productmenulist_model.deleteProductMenutlistByCode(
          data[0],
          connection
        );

        if (result.require) {
          for (let index = 0; index < data.length; index++) {
            trans.tran2 = await productmenulist_model.insertProductMenulist(
              data[index],
              connection
            );
          }
        }
      } else if (result.data.length == 0) {
        for (let index = 0; index < data.length; index++) {
          trans.tran1 = await productmenulist_model.insertProductMenulist(
            data[index],
            connection
          );
        }
      }

      return next(trans);
    });
    return result;
  };

Task.deleteProductMenutlistByCode = async function deleteProductMenutlistByCode(
  data
) {
  const connection = await connect();

  const result = await productmenulist_model.deleteProductMenutlistByCode(
    data,
    connection
  );

  connection.release();
  return result;
};

module.exports = Task;
