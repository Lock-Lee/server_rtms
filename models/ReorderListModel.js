const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getReorderListLastCode = function getReorderListLastCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(data.code)},
     LPAD(IFNULL(MAX(CAST(SUBSTRING(reoder_list_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
                FROM tb_reorder_list 
                WHERE reoder_list_code LIKE ('${data.code}%') 
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

Task.getReorderListByReordersCode = function getReorderListByReordersCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
                FROM tb_reorder_list
                WHERE reorders_code = ${connection.escape(data.reorders_code)}
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

Task.insertReorderList = function insertReorderList(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_reorder_list(  
      reoder_list_code,
      reorders_code,  
      product_code , 
      reoder_list_qty  ,
      reoder_list_price,
      reoder_list_total,
      addby,
      adddate,
      updateby,
      lastupdate  
                ) VALUES (
                ${connection.escape(data.reoder_list_code)},
                ${connection.escape(data.reorders_code)},
                ${connection.escape(data.product_code)},
                ${connection.escape(data.reoder_list_qty)},
                ${connection.escape(data.reoder_list_price)},
                ${connection.escape(data.reoder_list_total)},
                ${connection.escape(data.addby)},
                ${connection.escape(data.adddate)},
                ${connection.escape(data.updateby)},
                ${connection.escape(data.lastupdate)}
               
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

Task.deleteReorderListByCode = function deleteReorderListByCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE FROM tb_reorder_list WHERE reorders_code = ${connection.escape(
      data.reorders_code
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
