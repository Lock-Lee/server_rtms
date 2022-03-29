const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReorderLastCode = function getReorderLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(reorders_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                  FROM tb_reorder 
                  WHERE reorders_code LIKE ('${data.code}%') 
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
Task.getReorderBy = function getReorderBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
                  FROM tb_reorder AS tb
                  WHERE (reorders_code LIKE ('%${data.keyword}%') OR reorders_name LIKE ('%${data.keyword}%'))
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
                              FROM tb_reorder AS tb
                              WHERE (reorders_code LIKE ('%${data.keyword}%') OR reorders_name LIKE ('%${data.keyword}%'))
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
Task.getReorderByCode = function getReorderByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                  FROM tb_reorder
                  WHERE reorders_code = ${connection.escape(data.reorders_code)}
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
Task.updateReorderBy = function updateReorderBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_reorder SET
          reorders_date = ${connection.escape(data.reorders_date)},
          suppliers_code = ${connection.escape(data.suppliers_code)},
          reoders_usercreator = ${connection.escape(data.reoders_usercreator)},
          reorders_name = ${connection.escape(data.reorders_name)},
          reoders_remark = ${connection.escape(data.reoders_remark)}
                  WHERE reorders_code = ${connection.escape(data.reorders_code)}
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
Task.insertReorder = function insertReorder(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_reorder(  
        reorders_code,
        reorders_date,  
        suppliers_code , 
        reorders_name  ,
        reoders_usercreator,
        addby,
        adddate,
        reoders_remark  
                  ) VALUES (
                  ${connection.escape(data.reorders_code)},
                  ${connection.escape(data.reorders_date)},
                  ${connection.escape(data.suppliers_code)},
                  ${connection.escape(data.reorders_name)},
                  ${connection.escape(data.reoders_usercreator)},
                  ${connection.escape(data.addby)},
                  ${connection.escape(data.adddate)},
                  ${connection.escape(data.reoders_remark)}
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
Task.deleteReorderByCode = function deleteReorderByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_reorder WHERE reorders_code = ${connection.escape(
      data.reorders_code
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
