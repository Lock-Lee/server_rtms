const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getIncidentTypeLastCode = function getIncidentTypeLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(incident_type_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                FROM tb_incident_type 
                WHERE incident_type_code LIKE ('${data.code}%') 
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
Task.getIncidentTypeBy = function getIncidentTypeBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
                FROM tb_incident_type AS tb
                WHERE (incident_type_code LIKE ('%${data.keyword}%') OR ncident_type_name LIKE ('%${data.keyword}%'))
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
                            FROM tb_incident_type AS tb
                            WHERE (incident_type_code LIKE ('%${data.keyword}%') OR ncident_type_name LIKE ('%${data.keyword}%'))
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
Task.getIncidentTypeByCode = function getIncidentTypeByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                FROM tb_incident_type
                WHERE incident_type_code = ${connection.escape(
                  data.incident_type_code
                )}
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
Task.updateIncidentTypeBy = function updateIncidentTypeBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_incident_type SET
        ncident_type_name = ${connection.escape(data.ncident_type_name)},
        incident_type_detail = ${connection.escape(data.incident_type_detail)}
      
  
                WHERE incident_type_code = ${connection.escape(
                  data.incident_type_code
                )}
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
Task.insertIncidentType = function insertIncidentType(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_incident_type(  
                incident_type_code,
                ncident_type_name,
                incident_type_detail,
             
                lastupdate
               
                ) VALUES (
                ${connection.escape(data.incident_type_code)},
                ${connection.escape(data.ncident_type_name)},
                ${connection.escape(data.incident_type_detail)}
                
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
Task.deleteIncidentTypeByCode = function deleteIncidentTypeByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_incident_type WHERE incident_type_code = ${connection.escape(
      data.incident_type_code
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
