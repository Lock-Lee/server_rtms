const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReceiveReport = function getReceiveReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    if (data.date_start)
      condition += `AND event_date >= STR_TO_DATE(${connection.escape(
        data.date_start
      )},'%Y-%m-%d') `;
    if (data.date_end)
      condition += `AND event_date <= STR_TO_DATE(${connection.escape(
        data.date_end
      )},'%Y-%m-%d') `;

    let sql = `
    SELECT *,
    (SELECT CONCAT(user_code,' ', user_firstname,' ',user_lastname) FROM tb_user WHERE user_code IN (tb.user_code)) as fullname ,
    (SELECT product_name  FROM tb_product WHERE product_code IN (tb.product_code)) as product_name 
  FROM tb_stock_log as tb
  WHERE tb.stock_type = 'IN'
    ${condition}
    ORDER BY event_date DESC 
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

Task.getIssueReport = function getIssueReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    if (data.date_start)
      condition += `AND event_date >= STR_TO_DATE(${connection.escape(
        data.date_start
      )},'%Y-%m-%d') `;
    if (data.date_end)
      condition += `AND event_date <= STR_TO_DATE(${connection.escape(
        data.date_end
      )},'%Y-%m-%d') `;
    if (data.user_code)
      condition += `AND user_code=${connection.escape(data.user_code)} `;
    if (data.product_code)
      condition += `AND product_code=${connection.escape(data.product_code)} `;
    if (data.stock_product_type)
      condition += `AND stock_product_type =${connection.escape(
        data.stock_product_type
      )}  `;
    let sql = `
    SELECT *,
    (SELECT CONCAT(user_code,' ', user_firstname,' ',user_lastname) FROM tb_user WHERE user_code IN (tb.user_code)) as fullname ,
    (SELECT product_name  FROM tb_product WHERE product_code IN (tb.product_code)) as product_name 
  FROM tb_stock_log as tb 
  WHERE tb.stock_type = 'OUT'
    ${condition}
    ORDER BY event_date DESC 
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

Task.getBalanceReport = function getBalanceReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    if (data.date_start)
      condition += `AND event_date >= STR_TO_DATE(${connection.escape(
        data.date_start
      )},'%Y-%m-%d') `;
    if (data.date_end)
      condition += `AND event_date <= STR_TO_DATE(${connection.escape(
        data.date_end
      )},'%Y-%m-%d') `;

    let sql = `
    SELECT *, 
      (
        IFNULL((
          SELECT SUM(stock_qty)  
          FROM tb_stock_log 
          WHERE stock_type = 'IN' 
          AND product_code = tb.product_code
          AND event_date < STR_TO_DATE(${connection.escape(
            data.date_start
          )},'%Y-%m-%d')
        ),0) 
        - IFNULL((
          SELECT SUM(stock_qty)  
          FROM tb_stock_log 
          WHERE stock_type = 'OUT' 
          AND product_code = tb.product_code
          AND event_date < STR_TO_DATE(${connection.escape(
            data.date_start
          )},'%Y-%m-%d')
        ),0)
      ) AS stock_balance,
      IFNULL((
        SELECT SUM(stock_qty)  
        FROM tb_stock_log 
        WHERE stock_type = 'IN' 
        AND product_code = tb.product_code
        ${condition}
      ),0) AS stock_in,
      IFNULL((
        SELECT SUM(stock_qty)  
        FROM tb_stock_log 
        WHERE stock_type = 'OUT' 
        AND product_code = tb.product_code
        ${condition}
      ),0) AS stock_out
    FROM tb_product as tb  
    ORDER BY product_name  
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

Task.getIncidentReport = function getIncidentReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    if (data.date_start)
      condition += `AND event_date >= STR_TO_DATE(${connection.escape(
        data.date_start
      )},'%Y-%m-%d') `;
    if (data.date_end)
      condition += `AND event_date <= STR_TO_DATE(${connection.escape(
        data.date_end
      )},'%Y-%m-%d') `;

    let sql = `
    SELECT *,
    (SELECT CONCAT(user_code,' ', user_firstname,' ',user_lastname) FROM tb_user WHERE user_code IN (tb.user_code)) as fullname ,
    (SELECT product_name  FROM tb_product WHERE product_code IN (tb.product_code)) as product_name 
  FROM tb_stock_log as tb
  WHERE tb.balance_qty != tb.balance_confirm_qty
    ${condition}
    ORDER BY event_date DESC 
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

Task.getTransactionReport = function getTransactionReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    if (data.date_start)
      condition += `AND event_date >= STR_TO_DATE(${connection.escape(
        data.date_start
      )},'%Y-%m-%d') `;
    if (data.date_end)
      condition += `AND event_date <= STR_TO_DATE(${connection.escape(
        data.date_end
      )},'%Y-%m-%d') `;

    let sql = `
    SELECT *,
    (SELECT CONCAT(user_code,' ', user_firstname,' ',user_lastname) FROM tb_user WHERE user_code IN (tb.user_code)) as fullname ,
    (SELECT product_name  FROM tb_product WHERE product_code IN (tb.product_code)) as product_name 
  FROM tb_stock_log as tb
    WHERE TRUE
    ${condition}
    ORDER BY event_date DESC
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

Task.getLowStockReport = function getLowStockReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";

    let sql = `SELECT * FROM tb_product INNER JOIN tb_stock_layout ON tb_stock_layout.product_code = tb_product.product_code GROUP BY tb_stock_layout.product_code
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

Task.getSettingReport = function getSettingReport(data, connection) {
  return new Promise((resolve, reject) => {
    condition = "";
    let sql = `
    SELECT * 
    FROM tb_report_setting as tb 
    WHERE TRUE 
    ${condition}
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

Task.updateSettingReport = function updateSettingReport(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_report_setting SET
            email_service = ${connection.escape(data.email_service)}, 
            email_user = ${connection.escape(data.email_user)}, 
            email_password = ${connection.escape(data.email_password)}, 
            email_signature = ${connection.escape(data.email_signature)} 
          WHERE report_setting_code = 'REPORT-SETTING'
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
