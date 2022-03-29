const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getJobOpLastCode = function getJobOpLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(job_op_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_job_op
            WHERE job_op_code LIKE ('${data.code}%') 
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
Task.getJobOpBy = function getJobOpBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (data.job_op_code !== undefined && data.job_op_code !== "")
      condition += `AND 	job_code = ${connection.escape(data.job_code)} `;

    let sql = `SELECT tb.*,
           
            FROM tb_job_op
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
Task.getJobOpByCode = function getJobOpByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM tb_job_op WHERE job_code IN
                (SELECT job_code FROM tb_job WHERE job_code = ${connection.escape(
                  data.job_code
                )})
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

Task.updateJobOpBy = async function updateJobOpBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_op SET 
            job_code = ${connection.escape(data.job_code)},
            job_op_name = ${connection.escape(data.job_op_name)},
            job_op_no = ${connection.escape(data.job_op_no)}
            WHERE 	job_op_code  = ${connection.escape(data.job_op_code)}
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
Task.insertJobOp = function insertJobOp(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = "";
    sql += `INSERT INTO tb_job_op (
                job_op_code,
                job_code,
                job_op_name,
                job_op_no
               
                ) VALUES (
                ${connection.escape(data.job_op_code)},
                ${connection.escape(data.job_code)},
                ${connection.escape(data.job_op_name)},
                ${connection.escape(data.job_op_no)}
                );
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

Task.deleteJobOpByCode = function deleteJobOpByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE  FROM tb_job_op WHERE job_code IN ( SELECT job_code FROM tb_job WHERE job_op_code = ${connection.escape(
      data.job_op_code
    )})
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
Task.deleteJobOpByCodeNotIn = function deleteJobOpByCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_op
        WHERE job_code = ${connection.escape(data.job_code)}
        AND job_op_code NOT IN('${data.job_ops
          .map((item) => item.job_op_code)
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
