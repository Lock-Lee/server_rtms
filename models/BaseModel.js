const mysql = require("mysql");

const pool = mysql.createPool({
  timezone: "UTC",

  port: 3306,
  database: "revelsoft_rtms",
  acquireTimeout: 3000,
  multipleStatements: true,
  charset: "utf8",

  // host: "localhost",
  // user: "root",
  // password: "root1234",

  host: "rvscsdevelop-db.cfbckbnxiox7.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "ezVrr6ia56frWz9dCUSR",
});

const connect = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.generatePageBy = (data = []) => {
          let filters = "";
          let pagination = "";
          let sorter = "";

          if (data.filters) {
            for (const key in data.filters) {
              if (Array.isArray(data.filters[key])) {
                if (data.filters[key].length) {
                  filters += `AND ${key} IN ('${data.filters[key].join(
                    "','"
                  )}') `;
                }
              } else if (data.filters[key]) {
                filters += `AND LOWER(${key}) LIKE (LOWER(${pool.escape(
                  "%" + data.filters[key] + "%"
                )})) `;
              }
            }
          }
          if (
            data.pagination &&
            data.pagination.current &&
            data.pagination.pageSize
          ) {
            pagination = `LIMIT ${
              (data.pagination.current - 1) * data.pagination.pageSize
            }, ${data.pagination.pageSize} `;
          }
          if (data.sorter && data.sorter.field && data.sorter.order) {
            sorter = `ORDER BY ${data.sorter.field} ${
              data.sorter.order === "ascend" || data.sorter.order === "ASC"
                ? "ASC"
                : "DESC"
            } `;
          }

          return { filters, pagination, sorter };
        };

        resolve(connection);
      }
    });
  });
};

module.exports = connect;
