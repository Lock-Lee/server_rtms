const Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getSupplierLastCode = function getSupplierLastCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(supplier_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1, ${data.digit},0)) AS last_code 
            FROM tb_supplier 
            WHERE supplier_code LIKE ('${data.code}%') 
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
Task.getSupplierBy = function getSupplierBy(data, connection) {
    return new Promise(function (resolve) {
        if (data.keyword === undefined) data.keyword = "";

        const { filters, pagination, sorter } = connection.generatePageBy(data.params);

        var sql = `SELECT *
            FROM tb_supplier AS tb
            WHERE (supplier_code LIKE ('%${data.keyword}%') OR supplier_name LIKE ('%${data.keyword}%'))
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
                        FROM tb_supplier AS tb
                        WHERE (supplier_code LIKE ('%${data.keyword}%') OR supplier_name LIKE ('%${data.keyword}%'))
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
Task.getSupplierByCode = function getSupplierByCode(data, connection) {
    return new Promise(function (resolve) {
        var sql = `SELECT *
            FROM tb_supplier
            WHERE supplier_code = ${connection.escape(data.supplier_code)}
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
Task.updateSupplierBy = function updateSupplierBy(data, connection) {
   
    return new Promise(function (resolve) {
        var sql = `UPDATE tb_supplier SET
            supplier_name = ${connection.escape(data.supplier_name)},
            supplier_email = ${connection.escape(data.supplier_email)},
            supplier_image = ${connection.escape(data.supplier_image)},
            supplier_tel = ${connection.escape(data.supplier_tel)},
            supplier_address = ${connection.escape(data.supplier_address)},
            supplier_line_id = ${connection.escape(data.supplier_line_id)},
            supplier_flex = ${connection.escape(data.supplier_flex)}
            WHERE supplier_code = ${connection.escape(data.supplier_code)}
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
Task.insertSupplier = function insertSupplier(data, connection) {

    return new Promise(function (resolve) {
        var sql = `INSERT INTO tb_supplier(  
            supplier_code,
            supplier_name,
            supplier_email,
            supplier_image,
            supplier_tel,
            supplier_address,
            supplier_line_id,
            supplier_flex
               
            ) VALUES (
            ${connection.escape(data.supplier_code)},
            ${connection.escape(data.supplier_name)},
            ${connection.escape(data.supplier_email)},
            ${connection.escape(data.supplier_image)},
            ${connection.escape(data.supplier_tel)},
            ${connection.escape(data.supplier_address)},
            ${connection.escape(data.supplier_line_id)},
            ${connection.escape(data.supplier_flex)}
            
         
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
Task.deleteSupplierByCode = function deleteSupplierByCode(data, connection) {
    
    return new Promise(function (resolve) {
        var sql = `DELETE FROM tb_supplier WHERE supplier_code = ${connection.escape(data.supplier_code)} `;

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
