const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getUserGroupLastCode = function getUserGroupLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(user_group_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_user_group 
            WHERE user_group_code LIKE ('${data.code}%') 
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
Task.getUserGroupBy = function getUserGroupBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_user_group AS tb
            WHERE (user_group_code LIKE ('%${data.keyword}%') OR user_group_name LIKE ('%${data.keyword}%'))
            ${filters}
            ${sorter}
            ${pagination}
            `;
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        if (pagination === "") {
          resolve({ data: res, require: true });
        } else {
          sql = `SELECT COUNT(*) AS total
                        FROM tb_user_group AS tb
                        WHERE (user_group_code LIKE ('%${data.keyword}%') OR user_group_name LIKE ('%${data.keyword}%'))
                        ${filters}
                        `;
          connection.query(sql, function (err, res_total) {
            if (err) {
              resolve({ data: [], require: false, err: err });
            } else {
              resolve({ data: res, total: res_total[0].total, require: true });
            }
          });
        }
      }
    });
  });
};
Task.getUserGroupByCode = function getUserGroupByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_user_group
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
Task.updateUserGroupBy = function updateUserGroupBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_user_group SET
        user_group_name= ${connection.escape(data.user_group_name)}
           
            WHERE user_group_code  = ${connection.escape(data.user_group_code)}
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
Task.insertUserGroup = function insertUserGroup(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_user_group( 
            user_group_code,
            user_group_name
            ) VALUES (
            ${connection.escape(data.user_group_code)},
            ${connection.escape(data.user_group_name)}
           
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
Task.deleteUserGroupByCode = function deleteUserGroupByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_user_group
         WHERE 
         user_group_code = ${connection.escape(data.user_group_code)} `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

module.exports = Task;
