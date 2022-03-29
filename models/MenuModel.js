const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getMenuBy = function getMenuBy(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * 
            FROM tb_menu
            ORDER BY menu_group
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
Task.updateMenuBy = async function updateMenuBy(data, connection) {
  var sql = "";
  var menu_codes = [];

  data.menu.forEach((item, idx) => {
    if (item.menu_code === undefined || item.menu_code === "") {
      sql += `INSERT INTO tb_menu (
                menu_code,
                menu_group,
                menu_name,
                menu_name_en
                ) VALUES (
                (
                    SELECT CONCAT(${connection.escape(
                      data.code
                    )},LPAD(IFNULL(MAX(CAST(SUBSTRING(menu_code,${
        data.code.length + 1
      },4) AS SIGNED)),0) + 1,4,0))
                    FROM tb_menu AS tb_gencode
                    WHERE menu_code LIKE (${connection.escape(`${data.code}%`)})
                ),
                ${connection.escape(item.menu_group)},
                ${connection.escape(item.menu_name)},
                ${connection.escape(item.menu_name_en)}
                ); 
                `;
    } else {
      sql += `UPDATE tb_menu SET
                menu_group = ${connection.escape(item.menu_group)},
                menu_name = ${connection.escape(item.menu_name)},
                menu_name_en = ${connection.escape(item.menu_name_en)} 
                WHERE menu_code = ${connection.escape(item.menu_code)};
                `;
      menu_codes.push(item.menu_code);
    }
  });

  await this.deleteMenuByCodeNotIn({ menu_codes }, connection);

  return new Promise((resolve, reject) => {
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        resolve({ data: res, require: true });
      }
    });
  });
};
Task.deleteMenuByCodeNotIn = function deleteMenuByCodeNotIn(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `DELETE FROM tb_menu WHERE menu_code NOT IN ('${data.menu_codes.join(
      "','"
    )}') `;

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
