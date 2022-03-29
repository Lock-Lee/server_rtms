const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getJobOpByCode = function getJobOpByCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * 
          FROM tb_job_op
          WHERE job_code =${connection.escape(data.job_code)}
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

Task.getMachineByJobOpCode = function getMachineByJobOpCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.*,
          (SELECT machine_name FROM tb_machine WHERE machine_code = tb.machine_code ) as machine_name
          FROM tb_job_op_machine AS tb
          WHERE job_op_code =  ${connection.escape(data.job_op_code)}
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

Task.getProcressByJobOpCode = function getProcressByJobOpCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb_job_op_tools.job_op_tools_name,tb_job_op_tools.job_op_tools_code
          FROM tb_job_op_tools
          WHERE tb_job_op_tools.job_op_code = ${connection.escape(
            data.job_op_code
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

Task.getToolUseByJobOpToolCode = function getToolUseByJobOpToolCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.job_op_tools_use_code,tb.product_code,tb_product.product_name,tb_product.product_image,tb_product.product_amount,tb_product.product_barcode,tb_product.product_brand_code,tb_product.product_group_code,
      tb_product.product_type_code,tb_product.product_issue_type,tb_product.product_issue_unit,tb_product.product_package_qty,tb_product.product_price,tb_product.product_refill_unit,tb_product.product_rf_price,
      tb_product.product_size,tb_product.product_unit,tb_product.updateby,tb_product.addby,tb_product.adddate,tb_product.article_code,tb_product.internal_code,tb_product.lastupdate
          FROM tb_job_op_tools_use AS tb
          LEFT JOIN tb_product ON tb.product_code = tb_product.product_code
          LEFT JOIN tb_job_op_tools ON tb.job_op_tools_code = tb_job_op_tools.job_op_tools_code
          WHERE tb.job_op_tools_code = ${connection.escape(
            data.job_op_tool_code
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

Task.getStocklayoutByProductCode = function getStocklayoutByProductCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.product_code,tb.stock_layout_code,tb.stock_x,tb.stock_y,tb.stock_z,tb_product.product_name,tb.stock_layout_qty,tb_product.product_image
          FROM tb_stock_layout AS tb
          LEFT JOIN tb_product ON tb.product_code = tb_product.product_code
          WHERE tb.product_code = ${connection.escape(data.product_code)}
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

Task.updateProductUnitByProductCode = function updateProductUnitByProductCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `UPDATE tb_stock_layout
          SET product_code = ${connection.escape(
            data.product_code
          )},stock_use = ${connection.escape(
      data.stock_use
    )},stock_layout_qty =${connection.escape(data.tool_qty)}
          WHERE stock_layout_code = ${connection.escape(data.stock_layout_code)}
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

Task.updateProductUnitNewData = function updateProductUnitNewData(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `UPDATE tb_product
          SET product_amount =
          (SELECT SUM(stock_layout_qty)
          FROM tb_stock_layout
          WHERE product_code = ${connection.escape(data.product_code)}
          )
          WHERE product_code = ${connection.escape(data.product_code)}
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

Task.getProductByProductCodeAndName = function getProductByProductCodeAndName(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb_product.product_name,tb_product.product_code,tb_product.product_image
          FROM tb_product
          WHERE tb_product.product_code LIKE ${connection.escape(
            "%" + data.keyword + "%"
          )} OR tb_product.product_name LIKE ${connection.escape(
      "%" + data.keyword + "%"
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

Task.getJobByProductCode = function getJobByProductCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `
          SELECT * 
  FROM tb_job 
  WHERE job_code IN(
      SELECT job_code
      FROM tb_job_op
      WHERE job_op_code IN(
          SELECT job_op_code 
          FROM tb_job_op_tools
          WHERE job_op_tools_code IN(
              SELECT job_op_tools_code
              FROM tb_job_op_tools_use
              WHERE product_code = ${connection.escape(data.product_code)}
              )))  `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getOpByProductCode = function getOpByProductCode(data, connection) {
  return new Promise((resolve, reject) => {
    if (data.job_code !== "") {
      var sql = `
        SELECT * 
  FROM tb_job_op
  WHERE job_op_code IN
  (SELECT job_op_code
  FROM tb_job_op_tools
  WHERE job_op_tools_code IN
  (SELECT job_op_tools_code
  FROM tb_job_op_tools_use
  WHERE product_code = ${connection.escape(data.product_code)} 
  AND job_code = ${connection.escape(data.job_code)}
  )) `;
    } else {
      var sql = `
        SELECT * 
  FROM tb_job_op
  WHERE job_op_code IN
  (SELECT job_op_code
  FROM tb_job_op_tools
  WHERE job_op_tools_code IN
  (SELECT job_op_tools_code
  FROM tb_job_op_tools_use
  WHERE product_code = ${connection.escape(data.product_code)}
  )) `;
    }

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getMachineByOpcode = function getMachineByOpcode(data, connection) {
  return new Promise((resolve, reject) => {
    if (data.job_op_code !== "") {
      var sql = `SELECT * 
          FROM tb_machine 
          WHERE machine_code IN(
              SELECT machine_code
              FROM tb_job_op_machine
              WHERE job_op_code IN(
                  SELECT job_op_code
                  FROM tb_job_op
                  WHERE job_op_code =${connection.escape(data.job_op_code)}
              )
          ) `;
    } else {
      var sql = `SELECT * 
          FROM tb_machine 
          WHERE machine_code IN(
              SELECT machine_code
              FROM tb_job_op_machine
              WHERE job_op_code IN(
                  SELECT job_op_code
                  FROM tb_job_op
              )
          ) `;
    }
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getProcressByProductCode = function getProcressByProductCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    if (data.job_op_code !== "") {
      var sql = `SELECT * 
          FROM tb_job_op_tools
          WHERE job_op_tools_code IN(
              SELECT job_op_tools_code
              FROM tb_job_op_tools_use
              WHERE product_code = ${connection.escape(
                data.product_code
              )} AND job_op_code =${connection.escape(data.job_op_code)}
          )
          `;
    } else {
      var sql = `SELECT * 
      FROM tb_job_op_tools
      WHERE job_op_tools_code IN(
          SELECT job_op_tools_code
          FROM tb_job_op_tools_use
          WHERE product_code = ${connection.escape(data.product_code)}
      )
      `;
    }

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getindexCompartfromFIFO = function getindexCompartfromFIFO(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT *
              FROM tb_stock_layout
              WHERE product_code =${connection.escape(data.product_code)} 
              AND stock_status = ${connection.escape(data.TypeComp)} 
              AND stock_layout_qty != 0 
              AND stock_date !='' 
              ORDER BY stock_date 
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
