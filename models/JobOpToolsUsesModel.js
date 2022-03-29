const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getJobOpToolsUsesLastCode = function getJobOpToolsUsesLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(job_op_tools_use_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_job_op_tools_use
            WHERE job_op_tools_use_code LIKE ('${data.code}%') 
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
Task.getJobOpToolsUsesBy = function getJobOpToolsUsesBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (
      data.job_op_tools_use_code !== undefined &&
      data.job_op_tools_use_code !== ""
    )
      condition += `AND job_op_tools_use_code  = ${connection.escape(
        data.job_op_tools_use_code
      )} `;
    if (data.job_op_code !== undefined && data.job_op_code !== "")
      condition += `AND 	job_op_code = ${connection.escape(data.job_op_code)} `;

    let sql = `SELECT tb.*,
            IFNULL((
                SELECT 	job_op_code
                FROM tb_job_op
                WHERE 	job_op_code = tb.job_op_code
            ), tb.job_op_code) AS job_op_code 
            FROM tb_job_op_tools_use AS tb
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
Task.getJobOpToolsUsesByCode = function getJobOpToolsUsesByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT *,(SELECT product_name FROM tb_product WHERE product_code = tb.product_code ) as product_name FROM tb_job_op_tools_use  as tb WHERE job_op_tools_code =${connection.escape(
      data.job_op_tools_code
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
Task.saveJobOpToolsUsesBy = async function saveJobOpToolsUsesBy(
  data,
  connection
) {
  if (data.job_op_code === undefined || data.job_op_code === "")
    return { data: [], require: false };

  for (let product_supplier of data.product_suppliers) {
    let { job_op_code, machine_code } = product_supplier;

    await this.createRowJobOpToolsUses(
      { job_op_code, machine_code: data.machine_code },
      connection
    );

    let res = await new Promise((resolve, reject) => {
      let sql = `UPDATE tb_job_op_tools_use SET
            job_op_code = ${connection.escape(job_op_code)},
            job_op_tools_name = ${connection.escape(job_op_tools_name)},
            job_op_tools_drawing = ${connection.escape(job_op_tools_drawing)},
            job_op_tools_no = ${connection.escape(job_op_tools_no)},
                WHERE job_op_code = ${connection.escape(data.job_op_code)}
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
Task.updateJobOpToolsUsesBy = async function updateJobOpToolsUsesBy(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_op_tools_use SET 
        job_op_tools_use_code = ${connection.escape(
          data.job_op_tools_use_code
        )},
        toollife = ${connection.escape(data.toollife)},
        product_code = ${connection.escape(data.product_code)}, 
        job_op_tools_use_min = ${connection.escape(data.job_op_tools_use_min)},
        job_op_tools_use_max = ${connection.escape(data.job_op_tools_use_max)},
        job_op_tools_use_reorder = ${connection.escape(
          data.job_op_tools_use_reorder
        )},
        job_op_tools_use_inactive = ${connection.escape(
          data.job_op_tools_use_inactive
        )}
           
            WHERE 	job_op_tools_use_code  = ${connection.escape(
              data.job_op_tools_use_code
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
Task.insertJobOpToolsUses = function insertJobOpToolsUses(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = "";
    sql += `INSERT INTO tb_job_op_tools_use (
                job_op_tools_use_code ,
                job_op_tools_code,
                toollife,
                product_code,
                job_op_tools_use_min,
                job_op_tools_use_max,
                job_op_tools_use_reorder,
                job_op_tools_use_inactive
                ) VALUES (
                ${connection.escape(data.job_op_tools_use_code)},
                ${connection.escape(data.job_op_tools_code)},
                ${connection.escape(data.toollife)},
                ${connection.escape(data.product_code)},
                ${connection.escape(data.job_op_tools_use_min)},
                ${connection.escape(data.job_op_tools_use_max)},
                ${connection.escape(data.job_op_tools_use_reorder)},
                ${connection.escape(data.job_op_tools_use_inactive)}
                )
                `;

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

Task.deleteJobOpToolsUsesByCode = function deleteJobOpToolsUsesByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE  FROM tb_job_op_tools_use WHERE job_op_tools_use_code  = ${connection.escape(
      data.job_op_tools_use_code
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
Task.deleteJobOpToolsUsesByCodeNotIn = function deleteJobOpToolsUsesByCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_op_tools_use
            WHERE 	job_op_tools_use_code    = ${connection.escape(
              data.job_op_tools_use_code
            )}
            AND 	job_op_tools_use_code NOT IN ('${data.job_op_tools_uses
              .map((item) => item.job_op_tools_use_code)
              .join("','")}')
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
