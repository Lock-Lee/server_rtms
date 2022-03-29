const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReturnListLastCode = function getReturnListLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(return_list_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                FROM tb_return_list 
                WHERE return_list_code LIKE ('${data.code}%') 
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

Task.insertReturnList = function insertReturnList(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_return_list(  
      return_list_code,
      return_code,
      return_list_status,
      product_code,
      product_status
        ) VALUES (
        ${connection.escape(data.return_list_code)},
        ${connection.escape(data.return_code)},
        ${connection.escape(data.return_list_status)},
        ${connection.escape(data.product_code)},
        ${connection.escape(data.product_status)}
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
