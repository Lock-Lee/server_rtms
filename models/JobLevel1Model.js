const Task = function (task) {
  this.task = task.task;
};

Task.getJobLevel1By = function getJobLevel1By(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
    FROM tb_job_level_1 AS tb
    WHERE (job_level_1_name LIKE ('%${data.keyword}%') ) 
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
                          FROM tb_job_level_1 AS tb
                          WHERE (job_level_1_name LIKE ('%${data.keyword}%')) 
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
Task.getJobLevel1ByCode = function getJobLevel1ByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.*
          FROM tb_job_level_1 AS tb
          WHERE job_level_1_name = ${connection.escape(data.job_level_1_name)}
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

Task.updateJobLevel1By = function updateJobLevel1By(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_level_1 SET 
              job_name = ${connection.escape(data.job_name)},
              
              WHERE 	job_level_1_name  = ${connection.escape(
                data.job_level_1_name
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
Task.insertJobLevel1 = function insertJobLevel1(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO tb_job_level_1 (
              job_level_1_name 
              ) VALUES (${connection.escape(data.job_level_1_name)}) 
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
Task.deleteJobLevel1ByCode = function deleteJobLevel1ByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_level_1 WHERE job_level_1_name = ${connection.escape(
      data.job_level_1_name
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
Task.hideJobLevel1ByCode = function hideJobLevel1ByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_job_level_1 SET job_level_1_name =${connection.escape(
      data.code
    )}  WHERE tb_job_level_1 job_level_1_name  = ${connection.escape(
      data.job_level_1_name
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

module.exports = Task;
