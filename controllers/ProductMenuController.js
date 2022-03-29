const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const productmenu_model = require("../models/ProductMenuModel");
const productmenulist_model = require("../models/ProductMenuListModel");

const Task = function (task) {
  this.task = task.task;
};


Task.getProductMenuAll = async function getProductMenuAll(data) {
  const connection = await connect();

  const result = await productmenu_model.getProductMenuAll(data, connection);

  connection.release();
  return result;
};

Task.getProductMenuBy = async function getProductMenuBy(data) {
  const connection = await connect();

  const result = await productmenu_model.getProductMenuBy(data, connection);

  connection.release();
  return result;
};

Task.getProductMenuByCode = async function getProductMenuByCode(data) {
  const connection = await connect();

  const result = await productmenu_model.getProductMenuByCode(data, connection);

  connection.release();
  return result;
};

Task.insertProductMenu = async function insertProductMenu(data) {

  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    const result = await productmenu_model.getProductMenuByCode(data, connection);

    if (result.data.length == 0) {

      trans.tran1 = await productmenu_model.insertProductMenu(data, connection);

    }

    else {

    }

    return next(trans);
  });
  return result;
};

Task.updateProductMenuByCode = async function updateProductBy(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    trans.tran1 = await productmenu_model.updateProductMenuByCode(data, connection);
    trans.tran2 = await productmenu_model.updateProductMenuByCode2(data, connection);

    return next(trans);
  });
  return result;
};

Task.deleteProductMenutByCode = async function deleteProductMenutByCode(data) {
  const result = await inTransaction(async (connection, next) => {
    const trans = [];

    const result = await productmenu_model.getProductMenuByCode(data, connection);

    let level1 = {
      product_menu_name_ref: result.data[0].product_menu_name
    };

    if (result.data.length > 0) {

      const result1 = await productmenu_model.getProductMenuBy(level1, connection);

      if (result1.data.length > 0) {

        let level2 = {
          product_menu_name_ref: result1.data[0].product_menu_name
        };

        const result2 = await productmenu_model.getProductMenuBy(level2, connection);

        if (result2.data.length > 0) {

          let level3 = {
            product_menu_name_ref: result2.data[0].product_menu_name
          };

          const result3 = await productmenu_model.getProductMenuBy(level3, connection);

          if (result3.data.length > 0) {

            for (let i = 0; i < result3.data.length; i++) {

              data["product_menu_name"] = result3.data[i].product_menu_name

              trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
              trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

              if (i == result3.data.length - 1) {

                for (let i = 0; i < result2.data.length; i++) {

                  data["product_menu_name"] = result2.data[i].product_menu_name

                  trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                  trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

                  if (i == result2.data.length - 1) {

                    for (let i = 0; i < result1.data.length; i++) {

                      data["product_menu_name"] = result1.data[i].product_menu_name

                      trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                      trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);


                      if (i == result1.data.length - 1) {

                        for (let i = 0; i < result.data.length; i++) {

                          data["product_menu_name"] = result.data[i].product_menu_name

                          trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                          trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);


                        }
                      }
                    }
                  }
                }
              }
            }
          }

          else if (result3.data.length == 0) {

            for (let i = 0; i < result2.data.length; i++) {

              data["product_menu_name"] = result2.data[i].product_menu_name

              trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
              trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

              if (i == result2.data.length - 1) {

                for (let i = 0; i < result1.data.length; i++) {

                  data["product_menu_name"] = result1.data[i].product_menu_name

                  trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                  trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

                  if (i == result1.data.length - 1) {

                    for (let i = 0; i < result.data.length; i++) {

                      data["product_menu_name"] = result.data[i].product_menu_name

                      trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                      trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);
                    }
                  }
                }
              }
            }
          }
        }

        else if (result2.data.length == 0) {

          for (let i = 0; i < result1.data.length; i++) {

            data["product_menu_name"] = result1.data[i].product_menu_name

            trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
            trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

            if (i == result1.data.length - 1) {

              for (let i = 0; i < result.data.length; i++) {

                data["product_menu_name"] = result.data[i].product_menu_name

                trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
                trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

              }
            }
          }
        }
      }

      else if (result1.data.length == 0) {

        for (let i = 0; i < result.data.length; i++) {

          data["product_menu_name"] = result.data[i].product_menu_name

          trans.tran1 = await productmenu_model.deleteProductMenutByCode(data, connection);
          trans.tran2 = await productmenulist_model.deleteProductMenutlistByCode(data, connection);

        }
      }
    }

    return next(trans);
  });
  return result;
};


module.exports = Task;
