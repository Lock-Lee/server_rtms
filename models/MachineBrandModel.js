const Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getMachineBrandLastCode = function getMachineBrandLastCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(machine_brand_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_machine_brand
            WHERE machine_brand_code LIKE ('${data.code}%') 
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
Task.getMachineBrandBy = function getMachineBrandBy(data, connection) {
    return new Promise(function (resolve) {
        if (data.keyword === undefined) data.keyword = "";

        const { filters, pagination, sorter } = connection.generatePageBy(data.params);

        var sql = `SELECT *
            FROM tb_machine_brand AS tb
            WHERE (machine_brand_code LIKE ('%${data.keyword}%') OR machine_brand_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_machine_brand AS tb
                        WHERE (machine_brand_code LIKE ('%${data.keyword}%') OR machine_brand_name LIKE ('%${data.keyword}%'))
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
Task.getMachineBrandByCode = function getMachineBrandByCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT *
            FROM tb_machine_brand
            WHERE machine_brand_code = ${connection.escape(data.machine_brand_code)}
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
Task.updateMachineBrandBy = function updateMachineBrandBy(data, connection) {
   
    return new Promise(function (resolve) {
        var sql = `UPDATE tb_machine_brand SET
        machine_brand_name = ${connection.escape(data.machine_brand_name)}
        
            WHERE machine_brand_code  = ${connection.escape(data.machine_brand_code)}
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
Task.insertMachineBrand = function insertMachineBrand(data, connection) {
  
    return new Promise(function (resolve) {
        var sql = `INSERT INTO tb_machine_brand( 
            machine_brand_code,
            machine_brand_name
            ) VALUES (
            ${connection.escape(data.machine_brand_code)},
            ${connection.escape(data.machine_brand_name)}
           
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
Task.deleteMachineBrandByCode = function deleteMachineBrandByCode(data, connection) {
    
    return new Promise(function (resolve) {
        var sql = `DELETE FROM tb_machine_brand WHERE machine_brand_code = ${connection.escape(data.machine_brand_code)} `;

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
