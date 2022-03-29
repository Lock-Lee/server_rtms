const Task = function (task) {
  this.task = task.task;
};

Task.getDefaultTime = function getDefaultTime(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tb.*
          FROM tb_default_date AS tb
          WHERE 1
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
Task.insertDefaultTime = function insertDefaultTime(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE tb_default_date SET
    default_day =  ${connection.escape(data.default_day)},
    default_time = ${connection.escape(data.default_time)},
    default_date =  ${connection.escape(data.default_date)}
    WHERE
     tb_default_date.default_time = ${connection.escape(data.default_time_old)} 
     AND 
    tb_default_date.default_day = ${connection.escape(data.default_day_old)}
    AND 
    tb_default_date.default_date = ${connection.escape(data.default_date_old)}
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
Task.deleteDefaultTime = function deleteDefaultTime(data, connection) {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM tb_default_date WHERE 1
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
