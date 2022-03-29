const Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getMachineModelLastCode = function getMachineModelLastCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(machine_model_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_machine_model
            WHERE machine_model_code LIKE ('${data.code}%') 
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
Task.getMachineModelBy = function getMachineModelBy(data, connection) {
    return new Promise(function (resolve) {
        if (data.keyword === undefined) data.keyword = "";

        const { filters, pagination, sorter } = connection.generatePageBy(data.params);

        var sql = `SELECT *
            FROM tb_machine_model AS tb
            WHERE (machine_model_code LIKE ('%${data.keyword}%') OR machine_model_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_machine_model AS tb
                        WHERE (machine_model_code LIKE ('%${data.keyword}%') OR machine_model_name LIKE ('%${data.keyword}%'))
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
Task.getMachineModelByCode = function getMachineModelByCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT *
            FROM tb_machine_model
            WHERE machine_model_code = ${connection.escape(data.machine_model_code)}
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
Task.updateMachineModelBy = function updateMachineModelBy(data, connection) {

    return new Promise(function (resolve) {
        var sql = `UPDATE tb_machine_model SET
        machine_model_name = ${connection.escape(data.machine_model_name)}
           
            WHERE machine_model_code  = ${connection.escape(data.machine_model_code)}
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
Task.insertMachineModel = function insertMachineModel(data, connection) {

    return new Promise(function (resolve) {
        var sql = `INSERT INTO tb_machine_model( 
            machine_model_code,
            machine_model_name
            ) VALUES (
            ${connection.escape(data.machine_model_code)},
            ${connection.escape(data.machine_model_name)}
           
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
Task.deleteMachineModelByCode = function deleteMachineModelByCode(data, connection) {

    return new Promise(function (resolve) {
        var sql = `DELETE FROM tb_machine_model WHERE machine_model_code = ${connection.escape(data.machine_model_code)} `;

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
