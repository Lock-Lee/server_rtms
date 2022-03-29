const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.generateClassByStockLayoutCode = function generateClassByStockLayoutCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.stock_code
    )},'-', LPAD(IFNULL(MAX(SUBSTRING(stock_layout_code,7,1)),0) + 1,1 ,0)) AS last_code
            ,LPAD(IFNULL(MAX(SUBSTRING(stock_layout_code,7,1)),0)+1,1 ,0) AS classnumber
               FROM tb_stock_layout
               WHERE stock_code LIKE ('${data.stock_code}%') 
        `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: "", require: false, err: err });
      } else {
        resolve({ data: res[0].classnumber, require: true });
      }
    });
  });
};
Task.getStockLayout = function getStockLayout(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_stock_layout AS tb
            WHERE (stock_layout_code LIKE ('%${data.stock_code}%'))
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
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

Task.insertStockLayoutCode = function insertStockLayoutCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_stock_layout( 
            stock_layout_code,stock_code,stock_x,stock_y,stock_z,stock_use
            ) VALUES (
            ${connection.escape(data.stock_layout_code)},
            ${connection.escape(data.stock_code)},
            ${connection.escape(data.stock_x)},
            ${connection.escape(data.stock_y)},
            ${connection.escape(data.stock_z)},
            ${connection.escape(data.stock_use)}
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

Task.updateHow2buy = function updateHow2buy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_how2buy 
        SET
        stock_layout_code = ${connection.escape(data.stock_layout_code)}
            WHERE how2buy_code = ${connection.escape(data.how2buy_code)}
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

Task.getProductBy = function getProductBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
        FROM tb_product AS tb
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.getSuppliersByProductCode = function getSuppliersByProductCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT tb_supplier.supplier_code,tb_supplier.supplier_name,tb.product_code,tb.price,tb.how2buy_code
        FROM tb_how2buy AS tb
        JOIN tb_supplier
        WHERE tb.supplier_code = tb_supplier.supplier_code AND tb.product_code = ${connection.escape(
          data.product_code
        )}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

module.exports = Task;
