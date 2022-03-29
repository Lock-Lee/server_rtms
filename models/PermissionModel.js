const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getPermissionLastCode = function getPermissionlLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(permission_code ,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_permission
            WHERE permission_code LIKE ('${data.code}%') 
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
Task.getPermissionBy = function getPermissionBy(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.menu_code,
            menu_group,
            menu_name,
            menu_name_en,
            (SELECT   license_time  FROM tb_license WHERE license_code =${connection.escape(
              data.license_code
            )}) as license_time,
            IFNULL(permission_view, false) AS permission_view,
            IFNULL(permission_add, false) AS permission_add,
            IFNULL(permission_edit, false) AS permission_edit,
            IFNULL(permission_approve, false) AS permission_approve,
            IFNULL(permission_del, false) AS permission_delete,
            IFNULL(permission_cancel, false) AS permission_cancel
            FROM tb_menu AS tb
            LEFT JOIN tb_permission ON tb.menu_code = tb_permission.menu_code AND license_code =${connection.escape(
              data.license_code || ""
            )}
            ORDER BY menu_group, tb.menu_code
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
Task.insertPermission = function insertPermission(data, connection) {
  const now = new Date();
  const code_format = {
    code: `${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}-`,
    digit: 5,
  };

  return new Promise((resolve, reject) => {
    var sql = "";

    data.permissions.forEach((item, idx) => {
      sql += `INSERT INTO tb_permission (
                permission_code,
                license_code,
                menu_code,
                permission_view,
                permission_add,
                permission_del,
                permission_edit,
                permission_approve,
                permission_cancel
                ) VALUES (
                    (
                        SELECT CONCAT(${connection.escape(
                          code_format.code
                        )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(permission_code,${
        code_format.code.length + 1
      },${code_format.digit}) AS SIGNED)),0) + 1, ${
        code_format.digit
      },0)) AS last_code 
                        FROM tb_permission AS tb
                        WHERE permission_code LIKE ('${code_format.code}%')
                    ),
                ${connection.escape(data.license_code)},
                ${connection.escape(item.menu_code)},
                ${connection.escape(item.permission_view)},
                ${connection.escape(item.permission_add)},
                ${connection.escape(item.permission_delete)},
                ${connection.escape(item.permission_edit)},
                ${connection.escape(item.permission_approve)},
                ${connection.escape(item.permission_cancel)}
                );
                `;
    });

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.deletePermissionByCode = function deletePermissionByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `DELETE FROM tb_permission WHERE license_code = ${connection.escape(
      data.license_code
    )} `;

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
