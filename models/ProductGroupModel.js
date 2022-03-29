const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getProductGroupLastCode = function getProductGroupLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(product_group_code,${data.code.length + 1
      },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_product_group 
            WHERE product_group_code LIKE ('${data.code}%') 
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
Task.getProductGroupBy = function getProductGroupBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_product_group AS tb
            WHERE (product_group_code LIKE ('%${data.keyword}%') OR product_group_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_product_group AS tb
                        WHERE (product_group_code LIKE ('%${data.keyword}%') OR product_group_name LIKE ('%${data.keyword}%'))
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
Task.getProductGroupByCode = function getProductGroupByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_product_group
            WHERE product_group_code = ${connection.escape(
      data.product_group_code
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
Task.updateProductGroupBy = function updateProductGroupBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_product_group SET
        product_group_name= ${connection.escape(data.product_group_name)}
           
            WHERE product_group_code  = ${connection.escape(
      data.product_group_code
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
Task.insertProductGroup = function insertProductGroup(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_product_group( 
            product_group_code,
            product_group_name
            ) VALUES (
            ${connection.escape(data.product_group_code)},
            ${connection.escape(data.product_group_name)}
           
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
Task.deleteProductGroupByCode = function deleteProductGroupByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_product_group
         WHERE 
         product_group_code = ${connection.escape(data.product_group_code)} `;

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
