const Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.generateClassByStockLayoutCode = function generateClassByStockLayoutCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT CONCAT(${connection.escape(
      data.stock_code
    )},'-', LPAD(IFNULL(MAX(CAST(SUBSTRING(stock_layout_code,7,7) AS SIGNED)),0) + 1,2,0)) AS last_code
        ,LPAD(IFNULL(MAX(SUBSTRING(stock_layout_code,7,7)),0)+1,2 ,0) AS classnumber
        FROM tb_stock_layout
        WHERE stock_code LIKE ('${data.stock_code}%')
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: "", require: false, err: err });
      } else {
        resolve({ data: res[0].classnumber, require: true });
      }
    });
  });
};
Task.getStockLayout = function getStockLayout(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
            FROM tb_stock_layout AS tb
            LEFT JOIN tb_product
            ON tb.product_code = tb_product.product_code
            WHERE stock_layout_code LIKE'%${data.stock_code}%'
            ORDER BY stock_layout_code DESC
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getStockLayoutByGroup = function getStockLayoutByGroup(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT DISTINCT CONCAT(width,'x',height,'x',length) as stock_layout_option,stock_type FROM tb_stock_layout ORDER BY stock_layout_option ASC `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.insertStockLayoutCode = function insertStockLayoutCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `INSERT INTO tb_stock_layout( 
            stock_layout_code,
            stock_code,
            stock_type,
            stock_x,
            stock_y,
            stock_z,
            stock_use,
            width,
            length,
            height
            ) VALUES (
            ${connection.escape(data.stock_layout_code)},
            ${connection.escape(data.stock_code)},
            ${connection.escape(data.stock_type)},
            ${connection.escape(data.stock_x)},
            ${connection.escape(data.stock_y)},
            ${connection.escape(data.stock_z)},
            ${connection.escape(data.stock_use)},
            ${connection.escape(data.compartment_width)},
            ${connection.escape(data.compartment_length)},
            ${connection.escape(data.compartment_height)}
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

Task.updateHow2buy = function updateHow2buy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_how2buy 
        SET
        stock_layout_code = ${connection.escape(data.stock_layout_code)}
            WHERE how2buy_code = ${connection.escape(data.how2buy_code)}
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

Task.updateStockLayout = function updateStockLayout(data, connection) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_stock_layout 
        SET
        stock_use = ${connection.escape(data.stock_use)},
        stock_status = ${connection.escape(data.stock_status)},
        product_code = ${connection.escape(data.product_code)}
        WHERE  	stock_layout_code = ${connection.escape(data.stock_layout_code)}
       
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
Task.updateStockLayoutbyReseved = function updateStockLayoutbyReseved(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `UPDATE tb_stock_layout 
        SET
        stock_layout_qty = ${connection.escape(data.balance_confirm_qty)},
        stock_date = ${connection.escape(data.event_date)},
        product_code =  ${connection.escape(data.product_code)} ,
        stock_status=  ${connection.escape(data.stock_status)} 
        WHERE  	stock_layout_code = ${connection.escape(data.stock_layout_code)}
       
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
Task.deleteStockLayoutByStockYCode = function deleteStockLayoutByStockYCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `DELETE 
        FROM tb_stock_layout 
        WHERE stock_y = ${connection.escape(
          data.stock_y
        )} AND stock_code =${connection.escape(data.stock_code)}
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

Task.getProductBy = function getProductBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
        FROM tb_product AS tb
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.getSuppliersBy = function getSuppliersBy(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT *
        FROM tb_supplier AS tb
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.getSuppliersByProductCode = function getSuppliersByProductCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT tb_supplier.supplier_code,tb_supplier.supplier_name,tb.product_code,tb.price,tb.how2buy_code
        FROM tb_how2buy AS tb
        JOIN tb_supplier
        WHERE tb.supplier_code = tb_supplier.supplier_code AND tb.product_code = ${connection.escape(
          data.product_code
        )}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getCountReserve = function getCountReserve(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT COUNT(product_code) as count_slot ,product_code,stock_status, SUM(stock_layout_qty) as sum_slot FROM tb_stock_layout WHERE product_code !="" GROUP BY stock_status ,product_code`;
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.getResevedSlotbyCode = function getResevedSlotbyCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT * FROM tb_stock_layout WHERE product_code =${connection.escape(
      data.product_code
    )} 
    AND stock_status=${connection.escape(
      data.stock_status
    )} AND (	stock_layout_qty < (SELECT product_refill_unit*product_package_qty FROM tb_product WHERE product_code=${connection.escape(
      data.product_code
    )}))  ORDER BY stock_layout_qty DESC`;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getMaxSlotbyCode = function getMaxSlotbyCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT
    count(stock_layout_qty)*tb_p.product_refill_unit as product_max_qty 
    FROM tb_stock_layout as tb_sl inner join tb_product  as tb_p WHERE 
    tb_sl.product_code =${connection.escape(data.product_code)} and
     tb_sl.product_code =tb_p.product_code  GROUP BY  tb_sl.product_code
    `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getResevedSlotisNull = function getResevedSlotisNull(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT * FROM tb_stock_layout WHERE 
    stock_status='' AND   (SELECT product_size FROM tb_product WHERE product_code=${connection.escape(
      data.product_code
    )}) =  concat(width,"x",length,"x",height)
  `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getMaxSlotisCode = function (data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT COUNT(stock_layout_qty)* 
    (SELECT product_refill_unit*product_package_qty FROM tb_product WHERE product_code=${connection.escape(
      data.product_code
    )}) as maxby_code 
    FROM tb_stock_layout WHERE product_code=${connection.escape(
      data.product_code
    )} AND stock_status=${connection.escape(
      data.stock_status
    )} AND stock_use=${connection.escape(data.stock_use)} `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getMaxSlotisResevedbyCode = function getMaxSlotisResevedbyCode(
  data,
  connection
) {
  return new Promise(function (resolve) {
    var sql = `SELECT COUNT(stock_layout_qty)*
    (SELECT product_refill_unit FROM tb_product WHERE product_code='PDC202107002') as  maxby_code  
    FROM tb_stock_layout WHERE product_code='PDC202107002' AND stock_status='New' AND stock_use='2'`;
    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getRemainSlotbyCode = function getRemainSlotbyCode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT IFNULL(SUM(stock_layout_qty),0) as new_qty,
     IFNULL(COUNT(stock_status)*(SELECT product_refill_unit*product_package_qty FROM tb_product WHERE  product_code=${connection.escape(
       data.product_code
     )}),0)as new_max ,
     IFNULL((SELECT SUM(stock_layout_qty) FROM tb_stock_layout WHERE product_code= ${connection.escape(
       data.product_code
     )} AND 	stock_use='2'  AND stock_status='RF'),0) as rf_qty,
    (SELECT COUNT(stock_status)*(SELECT product_refill_unit*product_package_qty FROM tb_product WHERE product_code=${connection.escape(
      data.product_code
    )}) FROM tb_stock_layout WHERE product_code= ${connection.escape(
      data.product_code
    )} AND 	stock_use='2'  AND stock_status='RF') as rf_max,
    IFNULL((SELECT SUM(stock_layout_qty) FROM tb_stock_layout WHERE product_code= ${connection.escape(
      data.product_code
    )} AND 	stock_use='2'  AND stock_status='Loan'),0) as loan_qty,
    IFNULL((SELECT COUNT(stock_status)*(SELECT product_refill_unit*product_package_qty FROM tb_product WHERE product_code=${connection.escape(
      data.product_code
    )}) FROM tb_stock_layout WHERE product_code= ${connection.escape(
      data.product_code
    )} AND 	stock_use='2'  AND  stock_status='Loan'),0) as loan_max,
    IFNULL((SELECT SUM(stock_layout_qty) FROM tb_stock_layout WHERE product_code= ${connection.escape(
      data.product_code
    )} AND 	stock_use='2'  AND  stock_status='Old') ,0)as old_qty,
    IFNULL ((SELECT COUNT(stock_status)*(SELECT product_refill_unit*product_package_qty FROM tb_product WHERE  product_code=${connection.escape(
      data.product_code
    )}) FROM tb_stock_layout WHERE 	stock_use='2'  AND  product_code= ${connection.escape(
      data.product_code
    )} AND stock_status='Old'),0) as old_max
    FROM tb_stock_layout WHERE 	stock_use='2'  AND  product_code= ${connection.escape(
      data.product_code
    )} AND stock_status='New'`;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.getCountReserveBycode = function getCountReserveBycode(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT IFNULL(SUM(stock_layout_qty),0) AS count_product_type_new,
 
    (SELECT IFNULL(SUM(stock_layout_qty),0) FROM tb_stock_layout WHERE  stock_layout_qty != 0 AND stock_status ="RF" AND product_code =${connection.escape(
      data.product_code
    )})as count_product_type_rf,

    (SELECT IFNULL(SUM(stock_layout_qty),0) FROM tb_stock_layout WHERE stock_layout_qty != 0 AND stock_status ="Loan" AND product_code =${connection.escape(
      data.product_code
    )})as count_product_type_loan,

    (SELECT IFNULL(SUM(stock_layout_qty),0) FROM tb_stock_layout WHERE stock_layout_qty != 0 AND stock_status ="Old" AND product_code =${connection.escape(
      data.product_code
    )})as count_product_type_old

    FROM tb_stock_layout WHERE stock_layout_qty != 0 AND stock_status ="New" AND product_code =${connection.escape(
      data.product_code
    )}
            `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};
Task.getSlotisNull = function getSlotisNull(data, connection) {
  return new Promise(function (resolve) {
    var sql = `SELECT COUNT(*)*(SELECT product_refill_unit*product_package_qty FROM tb_product WHERE product_code = ${connection.escape(
      data.product_code
    )} ) AS slot_is_free FROM tb_stock_layout WHERE product_code IN ('') AND stock_status IN ('') 
    AND concat(width,"x",length,"x",height) = (SELECT product_size FROM tb_product WHERE product_code= ${connection.escape(
      data.product_code
    )} ) `;

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

Task.updatestocklayqtybyissue = function updatestocklayqtybyissue(
  data,
  connection
) {
  return new Promise(function (resolve) {
    if (data.stock_use == 1 && data.stock_layout_qty == 0) {
      var sql = `UPDATE tb_stock_layout
      SET 
      stock_layout_qty =0,
      stock_use =0,
      stock_status ='',
      product_code ='',
      stock_date =''
      WHERE stock_layout_code = ${connection.escape(data.stock_layout_code)}
              `;
    } else {
      var sql = `UPDATE tb_stock_layout
      SET 
      stock_layout_qty =${connection.escape(data.stock_layout_qty)},
      stock_date =${connection.escape(data.event_date)}
      WHERE stock_layout_code = ${connection.escape(data.stock_layout_code)}
              `;
    }

    connection.query(sql, function (err, res) {
      if (err) {
        resolve({ data: [], require: false, err: err });
      } else {
        connection.query(sql, function (err) {
          if (err) {
            resolve({ data: [], require: false, err: err });
          } else {
            resolve({ data: res, require: true });
          }
        });
      }
    });
  });
};

module.exports = Task;
