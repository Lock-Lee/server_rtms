const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getUserLicenseGroupByCode = function getUserLicenseGroupByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_user_license_group
            WHERE user_code = ${connection.escape(data.user_code)} 
            
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

Task.insertUserLicenseGroup = function insertUserLicenseGroup(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_user_license_group( 
            user_code,
            user_group_code 
            ) VALUES (
            ${connection.escape(data.user_code)},
            ${connection.escape(data.user_group_code)}
           
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
Task.deleteUserLicenseGroupByCode = function deleteUserLicenseGroupByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_user_license_group
         WHERE 
         user_code = ${connection.escape(data.user_code)} `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.deleteUserLicenseGroupCodeNotIn = function deleteUserLicenseGroupCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_user_license_group
    WHERE user_code = ${connection.escape(data)}
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
