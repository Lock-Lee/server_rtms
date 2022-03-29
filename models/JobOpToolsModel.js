const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getJobOpToolsLastCode = function getJobOpToolsLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(job_op_tools_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_job_op_tools
            WHERE job_op_tools_code LIKE ('${data.code}%') 
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
Task.getJobOpToolsBy = function getJobOpToolsBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (data.job_op_tools_code !== undefined && data.job_op_tools_code !== "")
      condition += `AND job_op_tools_code  = ${connection.escape(
        data.job_op_tools_code
      )} `;
    if (data.job_op_code !== undefined && data.job_op_code !== "")
      condition += `AND 	job_op_code = ${connection.escape(data.job_op_code)} `;

    let sql = `SELECT tb.*,
            IFNULL((
                SELECT 	job_op_code
                FROM tb_job_op
                WHERE 	job_op_code = tb.job_op_code
            ), tb.job_op_code) AS job_op_code 
            FROM tb_job_op_tools AS tb
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
Task.getJobOpToolsByCode = function getJobOpToolsByCode(data, connection) {
  return new Promise((resolve, reject) => {
    if (data.key === undefined) {
      data.forEach((item, idx) => {
        let sql = ` 
          SELECT * FROM tb_job_op_tools WHERE job_op_code =${connection.escape(
            item.job_op_code
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
    } else {
      let sql = ` 
      SELECT * FROM tb_job_op_tools WHERE job_op_code =${connection.escape(
        data.job_op_code
      )}
          `;
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

Task.updateJobOpToolsBy = async function updateJobOpToolsBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_op_tools SET 
        job_op_code = ${connection.escape(data.job_op_code)},
        job_op_tools_name = ${connection.escape(data.job_op_tools_name)},
        job_op_tools_drawing = ${connection.escape(data.job_op_tools_drawing)}, 
        job_op_tools_no = ${connection.escape(data.job_op_tools_no)}
            WHERE 	job_op_tools_code   = ${connection.escape(
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
Task.insertJobOpTools = function insertJobOpTools(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = "";
    sql += `INSERT INTO tb_job_op_tools (
                job_op_tools_code ,
                job_op_code,
                job_op_tools_name,
                job_op_tools_drawing,
                job_op_tools_no
                ) VALUES (
                ${connection.escape(data.job_op_tools_code)},
                ${connection.escape(data.job_op_code)},
                ${connection.escape(data.job_op_tools_name)},
                ${connection.escape(data.job_op_tools_drawing)},
                ${connection.escape(data.job_op_tools_no)}
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

Task.deleteJobOpToolsByCode = function deleteJobOpToolsByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE  FROM tb_job_op_tools WHERE job_op_tools_code IN
        (SELECT job_op_tools_code FROM tb_job_op_tools WHERE job_op_code IN 
        (SELECT job_op_code FROM tb_job_op WHERE job_code IN ( SELECT job_code FROM tb_job WHERE job_code = ${connection.escape(
          data.job_op_tools_code
        )})))
                  
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
Task.deleteJobOpToolsByCodeNotIn = function deleteJobOpToolsByCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_op_tools
        WHERE 	job_op_code = ${connection.escape(data.job_op_code)}
        AND job_op_tools_code   NOT IN('${data.job_op_tools
          .map((item) => item.job_op_tools_code)
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
