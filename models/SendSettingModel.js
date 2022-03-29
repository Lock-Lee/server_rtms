const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getSendSettingLastCode = function getSendSettingLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(send_setting_code,${
      data.code.length + 1
    },${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_send_setting
            WHERE send_setting_code LIKE ('${data.code}%') 
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
Task.getSendSettingBy = function getSendSettingBy(data, connection) {
  return new Promise(function (resolve) {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT *
            FROM tb_send_setting AS tb
            WHERE (send_setting_code LIKE ('%${data.keyword}%') OR send_setting_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_send_setting AS tb
                        WHERE (send_setting_code LIKE ('%${data.keyword}%') OR send_setting_name LIKE ('%${data.keyword}%'))
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
Task.getSendSettingByCode = function getSendSettingByCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_send_setting
            WHERE send_setting_code = ${connection.escape(
              data.send_setting_code
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
Task.updateSendSettingBy = function updateSendSettingBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_send_setting SET
                send_setting_name= ${connection.escape(
                  data.send_setting_name
                )} ,
                send_setting_time= ${connection.escape(
                  data.send_setting_time
                )} ,
                send_setting_date= ${connection.escape(
                  data.send_setting_date
                )} ,
                send_setting_time_type = ${connection.escape(
                  data.send_setting_time_type
                )} ,
                send_setting_receive= ${connection.escape(
                  data.send_setting_receive
                )} ,
                send_setting_issue= ${connection.escape(
                  data.send_setting_issue
                )} ,
                send_setting_balance= ${connection.escape(
                  data.send_setting_balance
                )} ,
                send_setting_incident= ${connection.escape(
                  data.send_setting_incident
                )} ,
                send_setting_transaction= ${connection.escape(
                  data.send_setting_transaction
                )} ,
                send_setting_low_stock= ${connection.escape(
                  data.send_setting_low_stock
                )} ,
                send_setting_issue_alway= ${connection.escape(
                  data.send_setting_issue_alway
                )} ,
                updateby= ${connection.escape(data.updateby)} ,
                lastupdate= NOW()   
            WHERE send_setting_code  = ${connection.escape(
              data.send_setting_code
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
Task.insertSendSetting = function insertSendSetting(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_send_setting( 
            send_setting_code,
            send_setting_name,
            send_setting_time,
            send_setting_date,
            send_setting_time_type,
            send_setting_receive,
            send_setting_issue,
            send_setting_balance,
            send_setting_incident,
            send_setting_transaction,
            send_setting_low_stock,
            send_setting_issue_alway,
            addby,
            adddate
            ) VALUES (
            ${connection.escape(data.send_setting_code)},
            ${connection.escape(data.send_setting_name)},
            ${connection.escape(data.send_setting_time)},
            ${connection.escape(data.send_setting_date)},
            ${connection.escape(data.send_setting_time_type)},
            ${connection.escape(data.send_setting_receive)},
            ${connection.escape(data.send_setting_issue)},
            ${connection.escape(data.send_setting_balance)},
            ${connection.escape(data.send_setting_incident)},
            ${connection.escape(data.send_setting_transaction)},
            ${connection.escape(data.send_setting_low_stock)},
            ${connection.escape(data.send_setting_issue_alway)},
            ${connection.escape(data.addby)},
            NOW() 
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
Task.deleteSendSettingByCode = function deleteSendSettingByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_send_setting
         WHERE send_setting_code = ${connection.escape(
           data.send_setting_code
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
Task.getEmailBy = function getEmailBy(data, connection) {
  console.log(data);
  let setting = "";
  return new Promise(function (resolve) {
    var sql = `SELECT DISTINCT send_setting_email
    FROM tb_send_setting_list
    LEFT JOIN tb_send_setting ON tb_send_setting_list.send_setting_code = tb_send_setting.send_setting_code
            WHERE ${data.key} = ${connection.escape(data.value)}
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
Task.getEmailByAuto = function getEmailByAuto(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT DISTINCT send_setting_email
    FROM tb_send_setting_list
    LEFT JOIN tb_send_setting ON tb_send_setting_list.send_setting_code = tb_send_setting.send_setting_code
            WHERE tb_send_setting_list.send_setting_code = ${connection.escape(
              data.send_setting_code
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
module.exports = Task;
