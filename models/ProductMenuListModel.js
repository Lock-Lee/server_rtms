const Task = function (task) {
  this.task = task.task;
};

Task.getproductMenuListBy = function getproductMenuListBy(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `SELECT * 
      FROM tb_product_menu_list
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

Task.getproductMenuListByCode = function getproductMenuListByCode(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `SELECT * 
      FROM tb_product_menu_list
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

Task.getProductByProductMenuName = function getProductByProductMenuName(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `
    SELECT * 
    FROM tb_product
    WHERE product_code IN(
    SELECT product_code 
        FROM tb_product_menu_list
        WHERE product_menu_name = ${connection.escape(data.product_menu_name)})
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

Task.insertProductMenulist = function insertProductMenulist(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
        INSERT INTO tb_product_menu_list( 
          product_menu_name,
          product_code
            ) VALUES (
            ${connection.escape(data.product_menu_name)},
            ${connection.escape(data.product_code)}
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

Task.deleteProductMenutlistByCode = function deleteProductMenutlistByCode(data, connection) {
  return new Promise((resolve, reject) => {

    let sql = `DELETE FROM tb_product_menu_list WHERE product_menu_name = ${connection.escape(
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
