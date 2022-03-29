const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.getJobOpMachineLastCode = function getJobOpMachineLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(job_op_machine_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_job_op_machine
            WHERE job_op_machine_code LIKE ('${data.code}%') 
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
Task.getJobOpMachineBy = function getJobOpMachineBy(data, connection) {
  return new Promise((resolve, reject) => {
    let condition = "";
    if (data.job_op_code !== undefined && data.job_op_code !== "")
      condition += `AND job_op_code = ${connection.escape(data.job_op_code)} `;
    if (data.machine_code !== undefined && data.machine_code !== "")
      condition += `AND machine_code = ${connection.escape(
        data.machine_code
      )} `;

    let sql = `SELECT tb.*,
            IFNULL((
                SELECT job_op_code
                FROM tb_job_op
                WHERE job_code = tb.job_code
            ), tb.job_code) AS job_code 
            FROM tb_job_op_machine AS tb
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
Task.getJobOpMachineByCode = function getJobOpMachineByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.*,
            (SELECT machine_name FROM tb_machine WHERE machine_code = tb.machine_code ) as machine_name
            FROM tb_job_op_machine AS tb
            WHERE job_op_code = ${connection.escape(data)}`;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};

Task.updateJobOpMachineBy = async function updateJobOpMachineBy(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_op_machine SET 
            job_op_code = ${connection.escape(data.job_op_code)},
            machine_code = ${connection.escape(data.machine_code)},
            production = ${connection.escape(data.production)},
            date_start = ${connection.escape(data.date_start)},
            date_end = ${connection.escape(data.date_end)}
            WHERE 	job_op_machine_code  = ${connection.escape(
              data.job_op_machine_code
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

Task.insertJobOPMachine = function insertJobOPMachine(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = "";
    sql += `INSERT INTO tb_job_op_machine (
                job_op_machine_code,
                job_op_code,
                machine_code,
                production,
                date_start,
                date_end
                ) VALUES (
                ${connection.escape(data.job_op_machine_code)},
                ${connection.escape(data.job_op_code)},
                ${connection.escape(data.machine_code)},
                ${connection.escape(data.production)},
                ${connection.escape(data.date_start)},
                ${connection.escape(data.date_end)}
               
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

Task.deleteJobOpmachineByCode = function deleteJobOpmachineByCode(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE  FROM tb_job_op_machine WHERE machine_code IN ( SELECT machine_code FROM tb_job WHERE job_code = ${connection.escape(
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
Task.deleteJobOpmachineByCodeNotIn = function deleteJobOpmachineByCodeNotIn(
  data,
  connection
) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_op_machine
            WHERE job_op_code  = ${connection.escape(data.job_op_code)}
            AND job_op_machine_code NOT IN ('${data.job_op_machines
              .map((item) => item.job_op_machine_code)
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
