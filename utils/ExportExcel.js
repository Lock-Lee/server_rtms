"use strict";
const excel = require("exceljs");
const exportToExcelUtility = async (
  rows,
  username,
  sheetName,
  columns,
  protect = false
) => {
  // Creating a workbook
  let workbook = new excel.Workbook();
  workbook.creator = username;
  workbook.lastModifiedBy = username;
  workbook.created = new Date();
  workbook.modified = new Date();
  // Adding worksheet to workbook
  let worksheet = workbook.addWorksheet(sheetName, {
    views: [{ state: "frozen", xSplit: 0, ySplit: 1 }],
  });
  worksheet.state = "visible";
  worksheet.properties.defaultColWidth = 30;
  // Adding table to worksheet
  worksheet.addTable({
    name: sheetName,
    ref: "A1",
    headerRow: true,
    totalsRow: true,
    style: {
      theme: "TableStyleMedium6",
      showRowStripes: true,
    },
    columns: columns,
    rows: [...rows],
  });
  // Adding password to worksheet to protect it from editing
  if (protect) await worksheet.protect(username);
  return workbook;
};
module.exports = exportToExcelUtility;
