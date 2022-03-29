const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getProductSupplierLastCode = function getProductSupplierLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(how2buy_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_how2buy
            WHERE how2buy_code LIKE ('${data.code}%') 
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
Task.getProductSupplierBy = function getProductSupplierBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (data.supplier_code !== undefined && data.supplier_code !== "")
      condition += `AND supplier_code = ${connection.escape(
        data.supplier_code
      )} `;
    if (data.product_code !== undefined && data.product_code !== "")
      condition += `AND product_code = ${connection.escape(
        data.product_code
      )} `;

    let sql = `SELECT tb.*,
            IFNULL((
                SELECT supplier_name
                FROM tb_supplier
                WHERE supplier_code = tb.supplier_code
            ), tb.supplier_code) AS supplier_name 
            FROM tb_how2buy AS tb
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
Task.getProductSupplierByCode = function getProductSupplierByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.* FROM tb_how2buy AS tb WHERE product_code =  ${connection.escape(
      data.product_code
    )}   
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
Task.saveProductSupplierBy = async function saveProductSupplierBy(
  data,
  connection
) {
  if (data.supplier_code === undefined || data.supplier_code === "")
    return { data: [], require: false };

  for (let product_supplier of data.product_suppliers) {
    let { product_code, product_supplier_price } = product_supplier;

    await this.createRowProductSupplier(
      { product_code, supplier_code: data.supplier_code },
      connection
    );

    let res = await new Promise((resolve, reject) => {
      let sql = `UPDATE tb_how2buy SET
                product_supplier_price = ${connection.escape(
                  product_supplier_price
                )},
                lastupdate = NOW()
                WHERE product_code = ${connection.escape(product_code)}
                AND supplier_code = ${connection.escape(data.supplier_code)}
                `;
      connection.query(sql, function (err, res) {
        if (err) {
          reject({ data: [], require: false, err: err });
        } else {
          resolve({ data: res, require: true });
        }
      });
    });

    if (res.require === false) return res;
  }

  return { data: [], require: true };
};
Task.updateProductSupplierBy = async function updateProductSupplierBy(
  data,
  connection
) {
  const now = new Date();
  const code_format = {
    code: `${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}-`,
    digit: 5,
  };

  let sql = "";
  var how2buy_codes = [];

  data.product_suppliers.forEach((item, idx) => {
    if (item.how2buy_code === undefined || item.how2buy_code === "") {
      sql += `INSERT INTO tb_how2buy (
                how2buy_code,
                product_code,
                supplier_code,
                how2buy_qty,
                how2buy_price,
                how2buy_leadtime,
                how2buy_remark
                ) VALUES (
                (
                    SELECT CONCAT(${connection.escape(
                      code_format.code
                    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(how2buy_code,${
        code_format.code.length + 1
      },${code_format.digit}) AS SIGNED)),0) + 1, ${
        code_format.digit
      },0)) AS last_code 
                    FROM tb_how2buy AS tb
                    WHERE how2buy_code LIKE ('${code_format.code}%')
                ),
                ${connection.escape(data.product_code)},
                ${connection.escape(item.supplier_code)},
                ${connection.escape(item.how2buy_qty)},
                ${connection.escape(item.how2buy_price)},
                ${connection.escape(item.how2buy_leadtime)},
                ${connection.escape(item.how2buy_remark)}
                );
                `;
    } else {
      sql += `UPDATE tb_how2buy SET
                supplier_code = ${connection.escape(item.supplier_code)},
                product_unit = ${connection.escape(item.product_unit)},
                price = ${connection.escape(item.price)},
                WHERE how2buy_code = ${connection.escape(item.how2buy_code)}
                `;
      how2buy_codes.push(item.how2buy_code);
    }
  });

  await this.deleteProductSupplierByCodeNotIn(
    { product_code: data.product_code, how2buy_codes },
    connection
  );

  return new Promise((resolve, reject) => {
    if (sql === "") {
      resolve({ data: [], require: true });
    } else {
      connection.query(sql, function (err, res) {
        if (err) {
          reject({ data: [], require: false, err: err });
        } else {
          resolve({ data: res, require: true });
        }
      });
    }
  });
};
Task.insertProductSupplier = function insertProductSupplier(data, connection) {
  return new Promise((resolve, reject) => {
    const now = new Date();
    const code_format = {
      code: `${now.getFullYear()}${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}-`,
      digit: 5,
    };

    let sql = "";

    data.product_suppliers.forEach((item, idx) => {
      sql += `INSERT INTO tb_how2buy (
                how2buy_code,
                product_code, 
                supplier_code,
                how2buy_qty,
                how2buy_price,
                how2buy_leadtime,
                how2buy_remark
                ) VALUES (
                (
                    SELECT CONCAT(${connection.escape(
                      code_format.code
                    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(how2buy_code,${
        code_format.code.length + 1
      },${code_format.digit}) AS SIGNED)),0) + 1, ${
        code_format.digit
      },0)) AS last_code 
                    FROM tb_how2buy AS tb
                    WHERE how2buy_code LIKE ('${code_format.code}%')
                ),
                ${connection.escape(data.product_code)},
                ${connection.escape(item.supplier_code)},
                ${connection.escape(item.how2buy_qty)},
                ${connection.escape(item.how2buy_price)},
                ${connection.escape(item.how2buy_leadtime)},
                ${connection.escape(item.how2buy_remark)}
               
                );
                `;
    });

    if (sql === "") {
      resolve({ data: [], require: true });
    } else {
      connection.query(sql, function (err, res) {
        if (err) {
          reject({ data: [], require: false, err: err });
        } else {
          resolve({ data: res, require: true });
        }
      });
    }
  });
};

Task.deleteProductSupplierByCode = function deleteProductSupplierByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    if (data.product_code === undefined) data.product_code = "";
    if (data.supplier_code === undefined) data.supplier_code = "";

    let sql = `DELETE FROM tb_how2buy 
            WHERE (
                product_code = ${connection.escape(data.product_code)} 
                OR supplier_code = ${connection.escape(data.supplier_code)}
            )
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
Task.deleteProductSupplierByCodeNotIn =
  function deleteProductSupplierByCodeNotIn(data, connection) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM tb_how2buy
            WHERE product_code = ${connection.escape(data.product_code)}
            AND how2buy_code NOT IN ('${data.how2buy_codes.join("','")}')
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
