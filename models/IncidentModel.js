const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getIncidentLastCode = function getIncidentLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(incident_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                FROM tb_incident 
                WHERE incident_code LIKE ('${data.code}%') 
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
Task.getIncidentBy = function getIncidentBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
                FROM tb_incident AS tb
                WHERE (incident_code LIKE ('%${data.keyword}%') OR product_code LIKE ('%${data.keyword}%'))
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
                            FROM tb_incident AS tb
                            WHERE (incident_code LIKE ('%${data.keyword}%') OR product_code LIKE ('%${data.keyword}%'))
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
Task.getIncidentByCode = function getIncidentByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                FROM tb_incident
                WHERE incident_code = ${connection.escape(data.incident_code)}
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
Task.updateIncidentBy = function updateIncidentBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_incident SET
    incident_name = ${connection.escape(data.incident_name)},
    job_code = ${connection.escape(data.job_code)},
    job_op_code = ${connection.escape(data.job_op_code)},
    machine_code = ${connection.escape(data.machine_code)},
    product_code = ${connection.escape(data.product_code)},
    shift = ${connection.escape(data.shift)},
    incident_type_code = ${connection.escape(data.incident_type_code)},
    user_code = ${connection.escape(data.user_code)},
    incident_date = ${connection.escape(data.incident_date)},
    incident_detail = ${connection.escape(data.incident_detail)},
    incident_image = ${connection.escape(data.incident_image)},
    updateby = ${connection.escape(data.updateby)},
    lastupdate = ${connection.escape(data.lastupdate)}
    WHERE incident_code = ${connection.escape(data.incident_code)}
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
Task.insertIncident = function insertIncident(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_incident(  
      incident_code,
      incident_name,
      job_code,
      job_op_code,
      machine_code ,
      product_code ,
      shift, 
      incident_type_code ,
      user_code ,
      incident_date ,
      incident_detail, 
      incident_image ,
      addby ,
      adddate 
      ) VALUES (
     ${connection.escape(data.incident_code)},
     ${connection.escape(data.incident_name)},
     ${connection.escape(data.job_code)},
     ${connection.escape(data.job_op_code)},
     ${connection.escape(data.machine_code)},
     ${connection.escape(data.product_code)},
     ${connection.escape(data.shift)},
     ${connection.escape(data.incident_type_code)},
     ${connection.escape(data.user_code)},
     ${connection.escape(data.incident_date)},
     ${connection.escape(data.incident_detail)},
     ${connection.escape(data.incident_image)},
     ${connection.escape(data.addby)},
     ${connection.escape(data.adddate)}
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
Task.deleteIncidentByCode = function deleteIncidentByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_incident WHERE incident_code = ${connection.escape(
      data.incident_code
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
