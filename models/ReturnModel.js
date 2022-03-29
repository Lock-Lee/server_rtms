const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReturnLastCode = function getReturnLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(return_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                FROM tb_return 
                WHERE return_code LIKE ('${data.code}%') 
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

Task.getReturnByUsercode = function getReturnByUsercode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                FROM tb_return
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

Task.insertReturn = function insertReturn(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_return(  
      return_code,
      return_date,
      user_code,
      return_status
        ) VALUES (
        ${connection.escape(data.return_code)},
        ${connection.escape(data.return_date)},
        ${connection.escape(data.user_code)},
        ${connection.escape(data.return_status)}
        )`;
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
