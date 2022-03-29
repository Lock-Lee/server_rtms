const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getStockLogLastCode = function getStockLogLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT 
        CONCAT(${connection.escape(
          data.code
        )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(stock_log_code,${
      data.code.length + 1
    },${data.code.length + 1}) AS SIGNED)),0) + 1, ${data.digit} ,0)) 
        AS last_code 
        FROM tb_stock_log
        WHERE stock_log_code LIKE ('${data.code}%') 
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

Task.insertStockLog = function insertStockLog(data, connection) {
  return new Promise(function (resolve) {
    if (data.balance_qty == null || data.balance_qty == undefined) {
      data.balance_qty = 0;
    }

    var sql = `INSERT INTO tb_stock_log( 
      stock_log_code,
      product_code,
      job_level_1_name,
      job_level_2_name,
      job_level_3_name,
      job_level_4_name,
      stock_code,
      stock_issue_code,
      stock_return_code,
      stock_layout_code,
      stock_log_ref_code,
      user_code,
      stock_type,
      stock_product_type,
      balance_qty,
      balance_confirm_qty,
      stock_qty,
      stock_price,
      event_date,
      stock_remark
      ) VALUES (
      ${connection.escape(data.stock_log_code)},
      ${connection.escape(data.product_code)},
      ${connection.escape(data.job_level_1_name)},
      ${connection.escape(data.job_level_2_name)},
      ${connection.escape(data.job_level_3_name)},
      ${connection.escape(data.job_level_4_name)},
      ${connection.escape(data.stock_code)},
      ${connection.escape(data.stock_issue_code)},
      ${connection.escape(data.stock_return_code)},
      ${connection.escape(data.stock_layout_code)},
      ${connection.escape(data.stock_log_ref_code)},
      ${connection.escape(data.user_code)},
      ${connection.escape(data.stock_type)}, 
      ${connection.escape(data.TypeComp)},
      ${connection.escape(data.balance_qty)},
      ${connection.escape(data.balance_confirm_qty)},
      ${connection.escape(data.stock_qty)},
      ${connection.escape(data.stock_price)}, 
      ${connection.escape(data.event_date)},
      ${connection.escape(data.stock_remark)}
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

Task.getStockLogByType = function getStockLogByType(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT *,(SELECT CONCAT(user_code,' ', user_firstname,' ',user_lastname) FROM tb_user WHERE user_code IN (tb.user_code)) as fullname,
    (SELECT machine_name  FROM tb_machine WHERE machine_code IN (tb.machine_code)) as machine_name ,
    (SELECT product_name  FROM tb_product WHERE product_code IN (tb.product_code)) as product_name,
    (SELECT job_name  FROM tb_job WHERE job_code IN (tb.job_code)) as job_name 
    FROM tb_stock_log as tb WHERE tb.stock_type =  ${connection.escape(
      data.stock_type
    )}`;
    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getStockLogByIssueCode = function getStockLogByIssueCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql;

    if (data.stock_issue_code) {
      sql = `SELECT * 
    FROM tb_stock_log
    WHERE stock_issue_code = ${connection.escape(data.stock_issue_code)}`;
    }

    if (data.stock_return_code) {
      sql = `SELECT * 
    FROM tb_stock_log
    WHERE stock_return_code = ${connection.escape(data.stock_return_code)}`;
    }

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
