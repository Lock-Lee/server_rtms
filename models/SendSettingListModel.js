const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getSendSettingListBy = function getSendSettingListBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT tb_send_setting_list.send_setting_email, user_firstname, user_lastname, user_email 
            FROM tb_send_setting_list
            LEFT JOIN tb_user ON tb_send_setting_list.send_setting_email = tb_user.user_code
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

Task.getSendSettingListByCode = function getSendSettingListByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT tb_send_setting_list.send_setting_email, user_firstname, user_lastname, user_email 
            FROM tb_send_setting_list WHERE send_setting_code = ${connection.escape(
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

Task.updateSendSettingListBy = function updateSendSettingListBy(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_send_setting_list SET
                send_setting_list_remark = ${connection.escape(
                  data.send_setting_list_remark
                )} , 
            WHERE send_setting_code  = ${connection.escape(
              data.send_setting_code
            )}
            AND send_setting_email  = ${connection.escape(
              data.send_setting_email
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

Task.insertSendSettingList = function insertSendSettingList(data, connection) {
  return new Promise(function (resolve) {
    var sql = `
                INSERT INTO tb_send_setting_list ( 
                    send_setting_code,
                    send_setting_email,
                    send_setting_list_remark 
                ) VALUES (
                    ${connection.escape(data.send_setting_code)},
                    ${connection.escape(data.send_setting_email)},
                    ${connection.escape(data.send_setting_list_remark)}
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

Task.deleteSendSettingListBy = function deleteSendSettingListBy(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_send_setting_list
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

Task.deleteSendSettingListByCode = function deleteSendSettingListByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_send_setting_list
         WHERE send_setting_code = ${connection.escape(data.send_setting_code)} 
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
