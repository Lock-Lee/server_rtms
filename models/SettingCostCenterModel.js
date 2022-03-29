const Task = function (task) {
  this.task = task.task;
};

Task.getsettingcostcenter = function getsettingcostcenter(data, connection) {
  return new Promise(function (resolve) {
    condition = "";
    let sql = `
    SELECT * 
    FROM tb_system_setting as tb 
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

Task.updatesettingcostcenter = function updatesettingcostcenter(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_system_setting 
        SET
        assign_job = ${connection.escape(data.assign_job)},
        assign_op = ${connection.escape(data.assign_op)},
        assign_machine = ${connection.escape(data.assign_machine)},
        assign_procress = ${connection.escape(data.assign_procress)}
            WHERE system_setting_code = 'system_setting'
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
