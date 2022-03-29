const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getSuccessLastCode = function getSuccessLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(success_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
              FROM tb_success 
              WHERE success_code LIKE ('${data.code}%') 
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
Task.getSuccessBy = function getSuccessBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
              FROM tb_success AS tb
              WHERE (success_code LIKE ('%${data.keyword}%') OR product_code LIKE ('%${data.keyword}%'))
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
                          FROM tb_success AS tb
                          WHERE (success_code LIKE ('%${data.keyword}%') OR product_code LIKE ('%${data.keyword}%'))
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
Task.getSuccessByCode = function getSuccessByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
              FROM tb_success
              WHERE success_code = ${connection.escape(data.success_code)}
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
Task.updateSuccessBy = function updateSuccessBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_success SET
      success_name = ${connection.escape(data.success_name)},
      job_code = ${connection.escape(data.job_code)},
      job_op_tools_code = ${connection.escape(data.job_op_tools_code)},
      job_op_code = ${connection.escape(data.job_op_code)},
      product_code = ${connection.escape(data.product_code)},
      success_date = ${connection.escape(data.success_date)},
      success_result = ${connection.escape(data.success_result)},
      success_detail = ${connection.escape(data.success_detail)},
      success_image =  ${connection.escape(data.success_image)},
      success_partname = ${connection.escape(data.success_partname)},
      success_material = ${connection.escape(data.success_material)},
      updateby = ${connection.escape(data.updateby)},
      lastupdate = ${connection.escape(data.lastupdate)}

              WHERE success_code = ${connection.escape(data.success_code)}
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
Task.insertSuccess = function insertSuccess(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_success(  
              success_code,
              success_name,
              job_code,  
              job_op_tools_code , 
              job_op_code  ,
              product_code  ,
              success_date , 
              success_result  ,
              success_detail , 
              success_image , 
              success_partname , 
              success_material , 
              addby  ,
              adddate  ,
              updateby  ,
              lastupdate 
              ) VALUES (
              ${connection.escape(data.success_code)},
              ${connection.escape(data.success_name)},
              ${connection.escape(data.job_code)},
              ${connection.escape(data.job_op_tools_code)},
              ${connection.escape(data.job_op_code)},
              ${connection.escape(data.product_code)},
              ${connection.escape(data.success_date)},
              ${connection.escape(data.success_result)},
              ${connection.escape(data.success_detail)},
              ${connection.escape(data.success_image)},
              ${connection.escape(data.success_partname)},
              ${connection.escape(data.success_material)},
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
Task.deleteSuccessByCode = function deleteSuccessByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_success WHERE success_code = ${connection.escape(
      data.success_code
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
