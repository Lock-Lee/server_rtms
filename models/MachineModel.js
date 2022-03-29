const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getMachineLastCode = function getMachineLastCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(machine_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_machine 
            WHERE machine_code LIKE ('${data.code}%') 
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
Task.getMachineBy = function getMachineBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_machine AS tb
            WHERE (machine_code LIKE ('%${data.keyword}%') OR machine_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_machine AS tb
                        WHERE (machine_code LIKE ('%${data.keyword}%') OR machine_name LIKE ('%${data.keyword}%'))
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
Task.getMachineByCode = function getMachineByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_machine
            WHERE machine_code = ${connection.escape(data.machine_code)}
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
Task.updateMachineBy = function updateMachineBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_machine SET
            machine_name = ${connection.escape(data.machine_name)},
            machine_type_code = ${connection.escape(data.machine_type_code)},
            machine_model_code = ${connection.escape(data.machine_model_code)},
            machine_brand_code = ${connection.escape(data.machine_brand_code)},
            machine_detail = ${connection.escape(data.machine_detail)},
            machine_image = ${connection.escape(data.machine_image)}, 
            machine_status = ${connection.escape(data.machine_status)},
            machine_spindle = ${connection.escape(data.machine_spindle)},
            addby ='',
            adddate='',
            updateby='',
            lastupdate=''
            WHERE machine_code  = ${connection.escape(data.machine_code)}
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
Task.insertMachine = function insertMachine(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_machine( 
            machine_code, 
            machine_type_code,
            machine_model_code,
            machine_brand_code,
            machine_detail,
            machine_image,
            machine_name,
            machine_status,
            machine_spindle,
            addby,
            adddate,
            updateby
            ) VALUES (
            ${connection.escape(data.machine_code)},
            ${connection.escape(data.machine_type_code)},
            ${connection.escape(data.machine_model_code)},
            ${connection.escape(data.machine_brand_code)},
            ${connection.escape(data.machine_detail)},
            ${connection.escape(data.machine_image)},
            ${connection.escape(data.machine_name)},
            ${connection.escape(data.machine_status)},
            ${connection.escape(data.machine_spindle)},
            ${connection.escape(data.addby)},
            ${connection.escape(data.adddate)},
            ${connection.escape(data.updateby)}
            
           
           
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
Task.deleteMachineByCode = function deleteMachineByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_machine WHERE machine_code = ${connection.escape(
      data.machine_code
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
