const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getToolsLifeRecordLastCode = function getToolsLifeRecordLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(records_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_record 
            WHERE records_code LIKE ('${data.code}%') 
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
Task.getToolsLifeRecordBy = function getToolsLifeRecordBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_record  INNER JOIN tb_product  ON tb_record.product_code = tb_product.product_code
            WHERE (tb_record.records_code LIKE ('%${data.keyword}%') OR tb_record.product_code LIKE ('%${data.keyword}%'))
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
                        FROM tb_record  INNER JOIN tb_product  ON tb_record.product_code = tb_product.product_code   
                        WHERE (tb_record.records_code LIKE ('%${data.keyword}%') OR tb_record.product_code LIKE ('%${data.keyword}%'))
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
Task.getToolsLifeRecordByCode = function getToolsLifeRecordByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_record
            WHERE records_code = ${connection.escape(data.records_code)}
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
Task.updateToolsLifeRecordBy = function updateToolsLifeRecordBy(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_record SET
    records_date = ${connection.escape(data.records_date)},
    record_toolife = ${connection.escape(data.record_toolife)},
    product_code= ${connection.escape(data.product_code)},
    addby = ${connection.escape(data.addby)},
    adddate = ${connection.escape(data.adddate)},
    updateby = ${connection.escape(data.updateby)},
    lastupdate = ${connection.escape(data.lastupdate)}
            WHERE records_code = ${connection.escape(data.records_code)}
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
Task.insertToolsLifeRecord = function insertToolsLifeRecord(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_record(  
            records_code,
            product_code,
            records_date,
            record_toolife,
            addby,
            adddate,
            updateby,
            lastupdate
            ) VALUES (
            ${connection.escape(data.records_code)},
            ${connection.escape(data.product_code)},
            ${connection.escape(data.records_date)},
            ${connection.escape(data.record_toolife)},
            ${connection.escape(data.addby)},
            ${connection.escape(data.adddate)},
            ${connection.escape(data.updateby)},
            ${connection.escape(data.lastupdate)}
            
         
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
Task.deleteToolsLifeRecordByCode = function deleteToolsLifeRecordByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_record WHERE records_code = ${connection.escape(
      data.records_code
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
