const Task = function (task) {
    this.task = task.task
}

Task.getProductionLastCode = function getProductionionLastCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(production_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_production
            WHERE production_code LIKE ('${data.code}%') 
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
Task.getProductionBy = function getProductionBy(data, connection) {
    return new Promise(function (resolve) {
        if (data.keyword === undefined) data.keyword = "";

        const { filters, pagination, sorter } = connection.generatePageBy(data.params);

        var sql = `SELECT *
            FROM tb_production AS tb
            WHERE (production_code LIKE ('%${data.keyword}%') OR job_code LIKE ('%${data.keyword}%'))
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
                        FROM tb_production AS tb
                        WHERE (production_code LIKE ('%${data.keyword}%') OR job_code LIKE ('%${data.keyword}%'))
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
      
}
Task.getProductionByCode = function getProductionByCode(data, connection) {
  
    return new Promise((resolve, reject) => {
        let sql = `SELECT tb.*
      
        FROM tb_production AS tb
        WHERE production_code = ${connection.escape(data.production_code)}
            `
        connection.query(sql, function (err, res) {
            if (err) {
                reject({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

Task.updateProductionBy = function updateProductionBy(data, connection) {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE tb_production SET 
            job_code = ${connection.escape(data.job_code)},
            production_date = ${connection.escape(data.production_date)},
            production_qty = ${connection.escape(data.production_qty)}, 
            production_really = ${connection.escape(data.production_really)},
            updateby = ${connection.escape(data.updateby)},
            lastupdate = NOW()
            WHERE production_code = ${connection.escape(data.production_code)}
            `
        connection.query(sql, function (err, res) {
            if (err) {
                reject({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}
Task.insertProduction = function insertProduction(data, connection) {
  
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO tb_production (
            production_code,
            job_code,
            production_date,
            production_qty,
            production_really,
            addby,
            adddate
          
            ) VALUES (
            ${connection.escape(data.production_code)},
            ${connection.escape(data.job_code)},
            ${connection.escape(data.production_date)},
            ${connection.escape(data.production_qty)},
            ${connection.escape(data.production_really)},
            ${connection.escape(data.addby)},
            NOW()
            )
            `
            
        connection.query(sql, function (err, res) {
            if (err) {
                reject({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}
Task.deleteProductionByCode = function deleteProductionByCode(data, connection) {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM tb_production WHERE production_code = ${connection.escape(data.production_code)} `

        connection.query(sql, function (err, res) {
            if (err) {
                reject({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

module.exports = Task;