const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getUserGroupProductLastCode = function getUserGroupProductLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(user_group_product_code ,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_user_group_product
            WHERE user_group_product_code LIKE ('${data.code}%') 
            `;
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: "", require: false, err: err });
      } else {
        resolve({ data: res[0].last_code, require: true });
      }
    });
  });
};
Task.getUserGroupProductByGroup = function getUserGroupProductByGroup(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_user_group_product as tb
            WHERE user_group_code = ${connection.escape(data.user_group_code)}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.getUserGroupProductByMutiGroup = function getUserGroupProductByMutiGroup(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_user_group_product as tb
            WHERE user_group_code IN ('${data.user_group
              .map((item) => item.user_group_code)
              .join("','")}')
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.insertUserGroupProduct = function insertUserGroupProduct(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_user_group_product( 
            user_group_product_code,
            user_group_code,
            product_code,
            withdraw_type,
            withdraw_license,
            withdraw_time_type,
            withdraw_qty
           
            ) VALUES ( 
            ${connection.escape(data.user_group_product_code)},
            ${connection.escape(data.user_group_code)},
            ${connection.escape(data.product_code)},
            ${connection.escape(data.withdraw_type)},
            ${connection.escape(data.withdraw_license)}, 
            ${connection.escape(data.withdraw_time_type)},
            ${connection.escape(data.withdraw_qty)}
            )
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.deleteUserGroupProductCodeNotIn = function deleteUserGroupProductCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_user_group_product
    WHERE user_group_code = ${connection.escape(data)}
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
module.exports = Task;
