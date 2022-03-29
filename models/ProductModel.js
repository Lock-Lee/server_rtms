const Task = function (task) {
  this.task = task.task;
};

Task.getProductLastCode = function getProductLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(product_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_product
            WHERE product_code LIKE ('${data.code}%') 
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
Task.getProductBy = function getProductBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(data);

    var sql = `SELECT *
            FROM tb_product AS tb
            WHERE (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_product AS tb
                        WHERE (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
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
Task.getProductByCode = function getProductByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.*,
        IFNULL((
            SELECT product_brand_name
            FROM tb_product_brand
            WHERE product_brand_code = tb.product_brand_code
        ), tb.product_brand_code) AS product_brand_name,  
        IFNULL((
            SELECT product_group_name
            FROM tb_product_group
            WHERE product_group_code = tb.product_group_code
        ), tb.product_group_code) AS product_group_name,
        IFNULL((
            SELECT product_type_name
            FROM tb_product_type
            WHERE product_type_code = tb.product_type_code
        ), tb.product_type_code) AS product_type_name
        FROM tb_product AS tb
        WHERE product_code = ${connection.escape(data.product_code)}
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

Task.updateProductBy = function updateProductBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_product SET 
    article_code = ${connection.escape(data.article_code)},
    internal_code = ${connection.escape(data.internal_code)},
    product_barcode = ${connection.escape(data.product_barcode)},
    product_type_code = ${connection.escape(data.product_type_code)}, 
    product_group_code = ${connection.escape(data.product_group_code)},
    product_brand_code = ${connection.escape(data.product_brand_code)}, 
    product_name = ${connection.escape(data.product_name)},
    product_image = ${connection.escape(data.product_image)},
    product_circulation = ${connection.escape(data.product_circulation)},
    product_type_consumable = ${connection.escape(
      data.product_type_consumable
    )},
    product_consignment = ${connection.escape(data.product_consignment)},
    product_package_qty	 = ${connection.escape(data.product_package_qty)},
    product_refill_unit = ${connection.escape(data.product_refill_unit)},
    product_issue_type = ${connection.escape(data.product_issue_type)},
    product_issue_unit = ${connection.escape(data.product_issue_unit)},
    product_min_qty = ${connection.escape(data.product_min_qty)},
    product_safety_qty = ${connection.escape(data.product_safety_qty)},
    product_max_qty = ${connection.escape(data.product_max_qty)},
    product_size = ${connection.escape(data.product_size)},
    product_price = ${connection.escape(data.product_price)},
    product_rf_price = ${connection.escape(data.product_rf_price)},
    product_unit = ${connection.escape(data.product_unit)},
    updateby = ${connection.escape(data.updateby)},
   
    lastupdate = NOW()
    WHERE product_code = ${connection.escape(data.product_code)}
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
Task.insertProduct = function insertProduct(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
        INSERT INTO tb_product( 
          product_code,
          article_code,
          internal_code,
          product_barcode,
          product_type_code,
          product_group_code,
          product_brand_code,
          product_name,
          product_image,
          product_unit,
          product_package_qty,
          product_refill_unit,
          product_issue_type,
          product_issue_unit,
          product_min_qty,
          product_safety_qty,
          product_type_consumable,
          product_max_qty,
          product_size,
          product_price,
          product_rf_price,
          addby,
          adddate
            ) VALUES (
            ${connection.escape(data.product_code)},
            ${connection.escape(data.article_code)},
            ${connection.escape(data.internal_code)},
            ${connection.escape(data.product_barcode)},
            ${connection.escape(data.product_type_code)},
            ${connection.escape(data.product_group_code)},
            ${connection.escape(data.product_brand_code)},
            ${connection.escape(data.product_name)},
            ${connection.escape(data.product_image)},
            ${connection.escape(data.product_qty)},
            ${connection.escape(data.product_package_qty)},
            ${connection.escape(data.product_refill_unit)},
            ${connection.escape(data.product_issue_type)},
            ${connection.escape(data.product_issue_unit)}, 
            ${connection.escape(data.product_min_qty)}, 
            ${connection.escape(data.product_safety_qty)},
            ${connection.escape(data.product_type_consumable)},
            ${connection.escape(data.product_max_qty)}, 
            ${connection.escape(data.product_size)},
            ${connection.escape(data.product_price)},
            ${connection.escape(data.product_rf_price)},
           
            ${connection.escape(data.addby)},
            NOW()
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
Task.deleteProductByCode = function deleteProductByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_product WHERE product_code = ${connection.escape(
      data.product_code
    )} `;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.getProductByGroup = function getProductByGroup(data, connection) {
  return new Promise(function (resolve) {
    let product_type_consumable = "";
    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );
    if (data.product_type_consumable) {
      product_type_consumable = `AND product_type_consumable= ${connection.escape(
        data.product_type_consumable
      )}`;
    }

    var sql = "";
    if (
      data.product_group_code === "" &&
      data.product_type_code === "" &&
      data.keyword === ""
    ) {
      product_type_consumable = ` product_type_consumable= ${connection.escape(
        data.product_type_consumable
      )}`;
      sql = `SELECT *
        FROM tb_product AS tb  WHERE
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}

        `;
    } else {
      if (
        data.product_type_code &&
        data.product_group_code === "" &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) 
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}

        `;
      } else if (
        data.product_group_code &&
        data.product_type_code === "" &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_group_code IN (${connection.escape(
          data.product_group_code
        )}) 
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}

        `;
      } else if (
        data.product_type_code &&
        data.product_group_code &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) AND  product_group_code IN(${connection.escape(
          data.product_group_code
        )})
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}

        `;
      } else if (
        data.product_type_code &&
        data.product_group_code &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) AND  product_group_code IN(${connection.escape(
          data.product_group_code
        )}) AND (product_code LIKE ('%${
          data.keyword
        }%') OR product_name LIKE ('%${data.keyword}%'))
         ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}
        `;
      } else if (
        data.product_type_code &&
        data.product_group_code === "" &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )})  AND (product_code LIKE ('%${
          data.keyword
        }%') OR product_name LIKE ('%${data.keyword}%'))
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}
        `;
      } else if (
        data.product_type_code === "" &&
        data.product_group_code === "" &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE  (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
        ${product_type_consumable}
        ${filters}
        ${sorter}
        ${pagination}
        `;
      }
    }

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        if (pagination === "") {
          resolve({ data: res, require: true });
        } else {
          sql = `SELECT COUNT(*) AS total
                        FROM tb_product AS tb
                        WHERE (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
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

Task.getProductALLByGroup = function getProductALLByGroup(data, connection) {
  return new Promise(function (resolve) {
    let product_type_consumable = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = "";
    if (
      data.product_group_code === "" &&
      data.product_type_code === "" &&
      data.keyword === ""
    ) {
      product_type_consumable = ` product_type_consumable= ${connection.escape(
        data.product_type_consumable
      )}`;
      sql = `SELECT *
        FROM tb_product AS tb  
  
        ${filters}
        ${sorter}
        ${pagination}
       
        `;
    } else {
      if (
        data.product_type_code &&
        data.product_group_code === "" &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) 
  
        ${filters}
        ${sorter}
        ${pagination}
       
        `;
      } else if (
        data.product_group_code &&
        data.product_type_code === "" &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_group_code IN (${connection.escape(
          data.product_group_code
        )}) 
  
        ${filters}
        ${sorter}
        ${pagination}
       
        `;
      } else if (
        data.product_type_code &&
        data.product_group_code &&
        data.keyword === ""
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) AND  product_group_code IN(${connection.escape(
          data.product_group_code
        )})
  
        ${filters}
        ${sorter}
        ${pagination}

        `;
      } else if (
        data.product_type_code &&
        data.product_group_code &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )}) AND  product_group_code IN(${connection.escape(
          data.product_group_code
        )}) AND (product_code LIKE ('%${
          data.keyword
        }%') OR product_name LIKE ('%${data.keyword}%'))

        ${filters}
        ${sorter}
        ${pagination}
        `;
      } else if (
        data.product_type_code &&
        data.product_group_code === "" &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE product_type_code IN (${connection.escape(
          data.product_type_code
        )})  AND (product_code LIKE ('%${
          data.keyword
        }%') OR product_name LIKE ('%${data.keyword}%'))

        ${filters}
        ${sorter}
        ${pagination}
        `;
      } else if (
        data.product_type_code === "" &&
        data.product_group_code === "" &&
        data.keyword
      ) {
        sql = `SELECT * FROM tb_product AS tb WHERE  (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
     
        ${filters}
        ${sorter}
        ${pagination}
        `;
      }
    }

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        if (pagination === "") {
          resolve({ data: res, require: true });
        } else {
          sql = `SELECT COUNT(*) AS total
                        FROM tb_product AS tb
                        WHERE (product_code LIKE ('%${data.keyword}%') OR product_name LIKE ('%${data.keyword}%'))
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
Task.checkProductByTransaction = function checkProductByTransaction(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT IF(COUNT(*)>0,False,True) as transaction ,product_code FROM tb_stock_log WHERE product_code IN ('${data.product_code
      .map((item) => item.product_code)
      .join("','")}') GROUP BY product_code
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
Task.updateProductByissue = function updateProductByissue(data, connection) {
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
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

module.exports = Task;
