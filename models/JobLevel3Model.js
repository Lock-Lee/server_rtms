const Task = function (task) {
  this.task = task.task;
};

Task.getJobLevel3By = function getJobLevel3By(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );
    var sql = `SELECT *
    FROM tb_job_level_3 AS tb
    WHERE   (job_level_1_name =  ${connection.escape(
      data.job_level_1_name
    )} AND job_level_2_name=  ${connection.escape(data.job_level_2_name)} ) 
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
                          FROM tb_job_level_3 AS tb
                          WHERE (job_level_1_name =  ${connection.escape(
            data.job_level_1_name
          )} AND job_level_2_name=  ${connection.escape(
            data.job_level_2_name
          )} ) 
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

Task.updateJobLevel3By = function updateJobLevel3By(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `
    UPDATE tb_job_level_3 SET job_level_3_name = ${connection.escape(
      data.job_level_3_name_new
    )}  WHERE tb_job_level_3.job_level_1_name =${connection.escape(
      data.job_level_1_name
    )} AND tb_job_level_3.job_level_2_name = ${connection.escape(
      data.job_level_2_name
    )}AND tb_job_level_3.job_level_3_name = ${connection.escape(
      data.job_level_3_name
    )}`;

    connection.query(sql, function (err, res) {
      if (err) {
        reject({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.insertJobLevel3 = function insertJobLevel3(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO tb_job_level_3 (
              job_level_1_name ,
              job_level_2_name ,
              job_level_3_name
              ) VALUES (
                ${connection.escape(data.job_level_1_name)},
                ${connection.escape(data.job_level_2_name)},
                ${connection.escape(data.job_level_3_name)}
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
Task.deleteJobLevel3ByCode = function deleteJobLevel3ByCode(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_job_level_3 
    WHERE job_level_1_name = ${connection.escape(
      data.job_level_1_name
    )} AND job_level_2_name = ${connection.escape(
      data.job_level_2_name
    )} AND job_level_3_name = ${connection.escape(data.job_level_3_name)}`;

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
