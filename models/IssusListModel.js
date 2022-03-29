const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getIssusListLastCode = function getIssusListLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(data.code)},
       LPAD(IFNULL(MAX(CAST(SUBSTRING(isuse_list_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                  FROM tb_isuse_list 
                  WHERE isuse_list_code LIKE ('${data.code}%') 
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

Task.getIssusListByIssussCode = function getIssusListByIssussCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                  FROM tb_isuse_list
                  WHERE issue_code = ${connection.escape(data.issue_code)}
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

Task.insertIssusList = function insertIssusList(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_isuse_list(  
        isuse_list_code,
        issue_code,  
        product_code , 
        addby,
        adddate,
        isuse_list_qty  
        ) VALUES (
        ${connection.escape(data.isuse_list_code)},
        ${connection.escape(data.issue_code)},
        ${connection.escape(data.product_code)},
        ${connection.escape(data.addby)},
        ${connection.escape(data.adddate)},
        ${connection.escape(data.isuse_list_qty)}
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
Task.deleteIssusListByCode = function deleteIssusListByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_isuse_list WHERE issue_code = ${connection.escape(
      data.issue_code
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
