const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getLicenseLastCode = function getLicenseLastCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT CONCAT(${connection.escape(
      data.code
    )}, LPAD(IFNULL(MAX(CAST(SUBSTRING(license_code,${data.code.length + 1},${
      data.digit
    }) AS SIGNED)),0) + 1,${data.digit},0)) AS last_code 
            FROM tb_license 
            WHERE license_code LIKE (${connection.escape(`${data.code}%`)}) 
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
Task.getLicenseBy = function getLicenseBy(data, connection) {
  return new Promise((resolve, reject) => {
    if (data.keyword === undefined) data.keyword = "";

    const { filters, pagination, sorter } = connection.generatePageBy(
      data.params
    );

    var sql = `SELECT tb.*
            FROM tb_license AS tb
            WHERE (license_code LIKE ('%${data.keyword}%') OR license_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_license AS tb
                        WHERE (license_code LIKE ('%${data.keyword}%') OR license_name LIKE ('%${data.keyword}%'))
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
Task.getLicenseByCode = function getLicenseByCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT tb.* 
            FROM tb_license AS tb
            WHERE license_code = ${connection.escape(data.license_code)}
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
Task.updateLicenseBy = function updateLicenseBy(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `UPDATE tb_license SET
            license_name = ${connection.escape(data.license_name)},
            updateby = ${connection.escape(data.updateby)},
            lastupdate = NOW()
            WHERE license_code = ${connection.escape(data.license_code)}
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
Task.insertLicense = async function insertLicense(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO tb_license (
            license_code,
            license_name,
            addby,
            adddate
            ) VALUES (
            ${connection.escape(data.license_code)},
            ${connection.escape(data.license_name)},
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
Task.deleteLicenseByCode = function deleteLicenseByCode(data, connection) {
  return new Promise((resolve, reject) => {
    var sql = `DELETE FROM tb_license WHERE license_code = ${connection.escape(
      data.license_code
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
