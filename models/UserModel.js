const Task = function (task) {
  this.task = task.task;
};

Task.checkLogin = function checkLogin(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT *
            FROM tb_user
            WHERE user_username = ${connection.escape(data.user_username)}
            AND user_password = ${connection.escape(data.user_password)}
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
Task.checkLoginRFID = function checkLoginRFID(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT *
            FROM tb_user
            WHERE user_RFID = ${connection.escape(
              data.user_RFID.split("Shift").join("")
            )}
           
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
Task.getUserLastCode = function getUserLastCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(user_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1,${data.digit},0)) AS last_code 
            FROM tb_user 
            WHERE user_code LIKE (${connection.escape(`${data.code}%`)}) 
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
Task.getUserBy = function getUserBy(data, connection) {
  return new Promise((resolve, reject) => {
    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );
    var sql = `SELECT *  ,
        CONCAT(tb.user_firstname," ",tb.user_lastname) as fullname,
        (SELECT department_name FROM tb_department WHERE department_code = tb.department_code) as  department_name,
        (SELECT license_name FROM tb_license WHERE license_code = tb.license_code) as license_name ,
        (SELECT user_type_name FROM tb_user_type WHERE user_type_code = tb.user_type_code) as user_type_name
        FROM tb_user as tb  WHERE 1 
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
                                FROM tb_user AS tb
                                WHERE (user_code LIKE ('%${data.keyword}%') OR user_name LIKE ('%${data.keyword}%'))
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
Task.getUserByCode = function getUserByCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.*
            FROM tb_user AS tb
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
Task.checkUsernameBy = function checkUsernameBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (data.user_code !== "" && data.user_code !== undefined)
      condition += `AND user_code != ${connection.escape(data.user_code)} `;

    var sql = `SELECT tb.*
            FROM tb_user AS tb
            WHERE user_username = ${connection.escape(data.user_username)} 
            ${condition}
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
Task.updateUserBy = function updateUserBy(data, connection) {
  return new Promise((resolve, reject) => {
    var str = `UPDATE tb_user SET 
                user_type_code= ${connection.escape(data.user_type_code)},
                department_code= ${connection.escape(data.department_code)},
                license_code= ${connection.escape(data.license_code)},
                user_firstname= ${connection.escape(data.user_firstname)},
                user_lastname= ${connection.escape(data.user_lastname)},
                user_username= ${connection.escape(data.user_username)},
                user_password= ${connection.escape(data.user_password)},
                user_RFID = ${connection.escape(data.user_RFID)},
                user_tel= ${connection.escape(data.user_tel)},
                user_email= ${connection.escape(data.user_email)},
                updateby = ${connection.escape(data.updateby)},
                lastupdate = NOW()
            WHERE user_code = ${connection.escape(data.user_code)}
            `;
    connection.query(str, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.insertUser = function insertUser(data, connection) {
  return new Promise((resolve, reject) => {
    var str = `INSERT INTO tb_user (
            user_code,
            user_type_code,
            department_code,
            license_code,
            user_firstname,
            user_lastname,
            user_username,
            user_password,
            user_RFID,
            user_tel,
            user_email,
            addby,
            adddate
            ) VALUES (
            ${connection.escape(data.user_code)},
            ${connection.escape(data.user_type_code)},
            ${connection.escape(data.department_code)},
            ${connection.escape(data.license_code)},
            ${connection.escape(data.user_firstname)},          
            ${connection.escape(data.user_lastname)},
            ${connection.escape(data.user_username)},
            ${connection.escape(data.user_password)},
            ${connection.escape(data.user_RFID)},
            ${connection.escape(data.user_tel)},
            ${connection.escape(data.user_email)},
            ${connection.escape(data.addby)},
            NOW()
           
            )
            `;

    connection.query(str, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.deleteUserByCode = function deleteUserByCode(data, connection) {
  return new Promise((resolve, reject) => {
    var str = `DELETE FROM tb_user WHERE user_code = ${connection.escape(
      data.user_code
    )} `;

    connection.query(str, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

module.exports = Task;
