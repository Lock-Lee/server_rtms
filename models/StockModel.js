const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getStockLastCode = function getStockLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT 
        CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(stock_code,${data.code.length + 1},${data.code.length + 1
      }) AS SIGNED)),0) + 1, ${data.digit} ,0)) 
        AS last_code 
        FROM tb_stock 
        WHERE stock_code LIKE ('${data.code}%') 
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
Task.getStock = function getStock(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_stock AS tb
            WHERE (stock_code LIKE ('%${data.keyword}%') OR stock_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_stock AS tb
                        WHERE (stock_code LIKE ('%${data.keyword}%') OR stock_name LIKE ('%${data.keyword}%'))
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

Task.getStockByCode = function getStockByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_stock
            WHERE stock_code = ${connection.escape(data.stock_code)}
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

Task.insertStock = function insertStock(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_stock( 
            stock_code,
            stock_name,
            stock_type,
            remark
            ) VALUES (
            ${connection.escape(data.stock_code)},
            ${connection.escape(data.stock_name)},
            ${connection.escape(data.stock_type)},
            ${connection.escape(data.remark)}
                
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

Task.updateStock = function updateStock(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_stock SET
        stock_name = ${connection.escape(data.stock_name)},
        stock_type = ${connection.escape(data.stock_type)},
        remark = ${connection.escape(data.remark)}
           
            WHERE stock_code = ${connection.escape(data.stock_code)}
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

Task.deleteStockByCode = function deleteStockByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_stock
         WHERE 
         stock_code = ${connection.escape(data.stock_code)} `;

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
