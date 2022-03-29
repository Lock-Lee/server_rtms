const Task = function (task) {
  this.task = task.task;
};

Task.getJobLastCode = function getJobLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(job_code ,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_job
            WHERE job_code LIKE ('${data.code}%') 
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
Task.getJobBy = function getJobBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_job AS tb
            WHERE (job_code LIKE ('%${data.keyword}%') OR job_name LIKE ('%${data.keyword}%'))  AND deleted = 0
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
                        FROM tb_job AS tb
                        WHERE (job_code LIKE ('%${data.keyword}%') OR 	job_name LIKE ('%${data.keyword}%')) AND deleted = 0
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
Task.getJobByCode = function getJobByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.*
        FROM tb_job AS tb
        WHERE job_code = ${connection.escape(data.job_code)}
            `;
    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res[0], require: true });
      }
    });
  });
};

Task.updateJobBy = function updateJobBy(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job SET 
            job_name = ${connection.escape(data.job_name)},
            job_no = ${connection.escape(data.job_no)},
            job_cpp = ${connection.escape(data.job_cpp)}, 
            job_start = ${connection.escape(data.job_start)},
            job_end = ${connection.escape(data.job_end)},
            job_hardness = ${connection.escape(data.job_hardness)},
            job_material = ${connection.escape(data.job_material)},
            updateby =  ${connection.escape(data.updateby)},
            lastupdate = NOW()
            WHERE 	job_code  = ${connection.escape(data.job_code)}
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
Task.insertJob = function insertJob(data, connection) {
  const { job } = data;

  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO tb_job (
            job_code ,
            job_name,
            job_no,
            job_cpp,
            job_start,
            job_end,
            job_hardness,          
            job_material,
            deleted,
            addby,
            adddate
            ) VALUES (
            ${connection.escape(job.job_code)},
            ${connection.escape(job.job_name)},
            ${connection.escape(job.job_no)},
            ${connection.escape(job.job_cpp)},
            ${connection.escape(job.job_start)},
            ${connection.escape(job.job_end)},
            ${connection.escape(job.job_hardness)},
            ${connection.escape(job.job_material)},
            ${connection.escape(job.deleted)},
            ${connection.escape(job.addby)},
           'ss'
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
Task.deleteJobByCode = function deleteJobByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job WHERE job_code = ${connection.escape(
      data.job_code
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
Task.hideJobByCode = function hideJobByCode(data, connection) {
 
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job SET 
        deleted = ${connection.escape(data.jobs.deleted)}
        
        WHERE 	job_code  = ${connection.escape(data.jobs.job_code)} `;

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
