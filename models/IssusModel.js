const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getIssusLastCode = function getIssusLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(	issue_code,${data.code.length + 1},${data.digit
      }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                  FROM tb_issue 
                  WHERE issue_code LIKE ('${data.code}%') 
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
Task.getIssusBy = function getIssusBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
                  FROM tb_issue AS tb
                  WHERE (	issue_code LIKE ('%${data.keyword}%') 
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
                              FROM tb_issue AS tb
                              WHERE (issue_code LIKE ('%${data.keyword}%') 
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

Task.getIssusByCode = function getIssusByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                  FROM tb_issue
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

Task.insertIssus = function insertIssus(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_issue(  
        issue_code,
        user_code,  
        issue_date
        ) VALUES (
        ${connection.escape(data.issue_code)},
        ${connection.escape(data.user_code)},
        ${connection.escape(data.issue_date)}
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
Task.deleteIssusByCode = function deleteIssusByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_issue WHERE issue_code = ${connection.escape(
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

Task.getIssusByUserCode = function getIssusByUserCode(data, connection) {
  return new Promise(function (resolve) {

    var sql = `SELECT * 
    FROM tb_issue 
    WHERE issue_code IN(
        SELECT  stock_issue_code
        FROM tb_stock_log
        WHERE stock_product_type ='Loan' AND user_code = ${connection.escape(data.user_code)}
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


module.exports = Task;
