const Task = function (task) {
  this.task = task.task;
};

Task.getProductMenuAll = function getProductMenuAll(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `SELECT * 
      FROM tb_menu_product
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });

  });
};

Task.getProductMenuBy = function getProductMenuBy(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `SELECT * 
      FROM tb_menu_product
      WHERE product_menu_name_ref = ${connection.escape(data.product_menu_name_ref)}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });

  });
};

Task.getProductMenuByCode = function getProductMenuByCode(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `SELECT * 
      FROM tb_menu_product
      WHERE product_menu_name = ${connection.escape(data.product_menu_name)}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });

  });
};

Task.insertProductMenu = function insertProductMenu(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
        INSERT INTO tb_menu_product( 
          product_menu_name,
          product_menu_name_ref
            ) VALUES (
            ${connection.escape(data.product_menu_name)},
            ${connection.escape(data.product_menu_name_ref)}
            )
            `;

    connection.query(sql, function (err, res) {

      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};


Task.updateProductMenuByCode = function updateProductMenuByCode(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `UPDATE tb_menu_product SET 
    product_menu_name = ${connection.escape(data.product_menu_name)}
    WHERE product_menu_name = ${connection.escape(data.product_menu_name_old)} 
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.updateProductMenuByCode2 = function updateProductMenuByCode2(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `UPDATE tb_menu_product SET 
    product_menu_name_ref = ${connection.escape(data.product_menu_name)}
    WHERE product_menu_name_ref = ${connection.escape(data.product_menu_name_old)} 
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.deleteProductMenutByCode = function deleteProductMenutByCode(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `DELETE FROM tb_menu_product WHERE product_menu_name = ${connection.escape(
      data.product_menu_name
    )} `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};



module.exports = Task;
