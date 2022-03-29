var nodemailer = require("nodemailer");
const connect = require("../models/BaseModel");
const exportToExcelUtility = require("../utils/ExportExcel");
const send_setting_model = require("../models/SendSettingModel");
const report_model = require("../models/ReportModel");
const NumberFormat = require("../utils/NumberFormat");

const number_format = new NumberFormat();
const Task = function (task) {
  this.task = task.task;
};

Task.runSendReport = async function runSendReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);

  let cc = [];
  let attachments = [];
  data.data.email.forEach((email) => {
    cc.push(email.send_setting_email);
  });

  if (data.data.send_setting_receive == 1) {
    const result_data = await report_model.getReceiveReport(data, connection);
    const columns = [
      { name: "วันที่", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "ประเภท", filterButton: true },
      { name: "ช่องที่", filterButton: false },
      { name: "คงเหลือหลังรับ", filterButton: false },
      { name: "ยืนยันคงเหลือหลังรับ", filterButton: false },
      { name: "ผู้นำเข้า", filterButton: false },
      { name: "จำนวนรับเข้า", filterButton: false },
      { name: "ราคาต่อชิ้น", filterButton: false },
      { name: "ราคารวม", filterButton: false },
    ];

    let rows = [];
    for (let index = 0; index < result_data.data.length; index++) {
      const item = result_data.data[index];
      const row = [];

      row.push(`${item.event_date}`);
      row.push(`${item.product_code}`);
      row.push(`${item.product_name}`);
      row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
      row.push(`${item.stock_layout_code}`);
      row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
      row.push(`${item.fullname}`);
      row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
      row.push(`${number_format.strFix(parseFloat(item.stock_price), 2)}`);
      row.push(
        `${number_format.strFix(
          parseInt(item.stock_qty) * parseFloat(item.stock_price),
          2
        )}`
      );

      rows.push(row);
    }
    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Receive",
      columns,
      false
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Receive report " + data.date_start + " to " + data.date_end + ".xlsx";

    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
  if (data.data.send_setting_issue == 1) {
    const result_data = await report_model.getIssueReport(data, connection);

    const columns = [
      { name: "วันที่", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "ประเภท", filterButton: true },
      { name: "ช่องที่", filterButton: true },
      { name: "คงเหลือหลังเบิก", filterButton: false },
      { name: "ยืนยันคงเหลือหลังเบิก", filterButton: false },
      { name: "ผู้เบิก", filterButton: true },
      { name: "งาน", filterButton: true },
      { name: "เครื่อง", filterButton: true },
      { name: "จำนวนเบิกออก", filterButton: false },
      { name: "ราคาต่อชิ้น", filterButton: false },
      { name: "ราคารวม", filterButton: false },
    ];

    let rows = [];
    for (let index = 0; index < result_data.data.length; index++) {
      const item = result_data.data[index];
      const row = [];

      row.push(`${item.event_date}`);
      row.push(`${item.product_code}`);
      row.push(`${item.product_name}`);
      row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
      row.push(`${item.stock_layout_code}`);
      row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
      row.push(`${item.fullname}`);
      row.push(`${item.job_name}`);
      row.push(`${item.machine_name}`);
      row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
      row.push(`${number_format.strFix(parseFloat(item.stock_price), 2)}`);
      row.push(
        `${number_format.strFix(
          parseInt(item.stock_qty) * parseFloat(item.stock_price),
          2
        )}`
      );
      rows.push(row);
    }

    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Issue",
      columns
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Issue report " + data.date_start + " to " + data.date_end + ".xlsx";
    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
  if (data.data.send_setting_balance == 1) {
    const result_data = await report_model.getBalanceReport(data, connection);

    const columns = [
      { name: "ลำดับ", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "ประเภท", filterButton: true },
      { name: "ยกยอดมา", filterButton: false },
      { name: "รับเข้า", filterButton: false },
      { name: "เบิกออก", filterButton: false },
      { name: "คงเหลือ", filterButton: false },
      { name: "ราคาต่อชิ้น", filterButton: false },
      { name: "ราคารวม", filterButton: false },
    ];

    let rows = [];
    for (let index = 0; index < result_data.data.length; index++) {
      const item = result_data.data[index];
      const row = [];
      const stock_amount =
        parseInt(item.stock_balance) +
        parseInt(item.stock_in) -
        parseInt(item.stock_out);
      row.push(index + 1);
      row.push(`${item.product_code}`);
      row.push(`${item.product_name}`);
      row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
      row.push(`${number_format.strFix(parseInt(item.stock_balance))}`);
      row.push(`${number_format.strFix(parseInt(item.stock_in))}`);
      row.push(`${number_format.strFix(parseInt(item.stock_out))}`);
      row.push(`${number_format.strFix(parseInt(stock_amount))}`);
      row.push(`${number_format.strFix(parseFloat(item.product_price), 2)}`);
      row.push(
        `${number_format.strFix(
          parseInt(stock_amount) * parseFloat(item.product_price),
          2
        )}`
      );
      rows.push(row);
    }

    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Balance",
      columns
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Balance report " + data.date_start + " to " + data.date_end + ".xlsx";
    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
  if (data.data.send_setting_incident == 1) {
    const result_data = await report_model.getIncidentReport(data, connection);

    const columns = [
      { name: "วันที่", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "ประเภท", filterButton: true },
      { name: "ประเภทการดำเนินการ", filterButton: true },
      { name: "ช่องที่", filterButton: true },
      { name: "ผู้ดำเนินการ", filterButton: true },
      { name: "จำนวน", filterButton: false },
      { name: "คงเหลือหลังดำเนินการ", filterButton: false },
      { name: "ยืนยันคงเหลือหลังดำเนินการ", filterButton: false },
    ];

    let rows = [];
    for (let index = 0; index < result_data.data.length; index++) {
      const item = result_data.data[index];
      const row = [];

      row.push(`${item.event_date}`);
      row.push(`${item.product_code}`);
      row.push(`${item.product_name}`);
      row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
      row.push(`${item.stock_type ? item.stock_type : ""}`);
      row.push(`${item.stock_layout_code}`);
      row.push(`${item.fullname}`);
      row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
      rows.push(row);
    }

    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Incident",
      columns
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Incident report " + data.date_start + " to " + data.date_end + ".xlsx";

    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
  if (data.data.send_setting_transaction == 1) {
    const result_data = await report_model.getTransactionReport(
      data,
      connection
    );

    const columns = [
      { name: "วันที่", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "ประเภท", filterButton: true },
      { name: "ประเภทการดำเนินการ", filterButton: true },
      { name: "ช่องที่", filterButton: true },
      { name: "ผู้ดำเนินการ", filterButton: true },
      { name: "จำนวน", filterButton: false },
      { name: "คงเหลือหลังดำเนินการ", filterButton: false },
      { name: "ยืนยันคงเหลือหลังดำเนินการ", filterButton: false },
    ];

    let rows = [];
    for (let index = 0; index < result_data.data.length; index++) {
      const item = result_data.data[index];
      const row = [];

      row.push(`${item.event_date}`);
      row.push(`${item.product_code}`);
      row.push(`${item.product_name}`);
      row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
      row.push(`${item.stock_type ? item.stock_type : ""}`);
      row.push(`${item.stock_layout_code}`);
      row.push(`${item.fullname}`);
      row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
      row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
      rows.push(row);
    }

    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Transaction",
      columns
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Transaction report " +
      data.date_start +
      " to " +
      data.date_end +
      ".xlsx";
    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
  if (data.data.send_setting_low_stock == 1) {
    const result_data = await report_model.getLowStockReport(data, connection);

    const columns = [
      { name: "ลำดับ", filterButton: true },
      { name: "รหัสสินค้า", filterButton: true },
      { name: "ชื่อสินค้า", filterButton: true },
      { name: "จุดต่ำสุด (ชิ้น)", filterButton: false },
      { name: "จุดสั่งซื้อ (ชิ้น)", filterButton: false },
      { name: "จุดสูงสุด (ชิ้น)", filterButton: false },
      { name: "จำนวนคงเหลือ (ชิ้น)", filterButton: false },
      { name: "ราคาต่อชิ้น", filterButton: false },
      { name: "ราคารวม", filterButton: false },
    ];

    let rows = [];
    // for (let index = 0; index < result_data.data.length; index++) {
    //   const item = result_data.data[index];
    //   const row = [];
    //   const stock_amount =
    //     parseInt(item.stock_balance) +
    //     parseInt(item.stock_in) -
    //     parseInt(item.stock_out);
    //   row.push(index + 1);
    //   row.push(`${item.product_code}`);
    //   row.push(`${item.product_name}`);
    //   row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    //   row.push(`${number_format.strFix(parseInt(item.product_min_qty))}`);
    //   row.push(`${number_format.strFix(parseInt(item.product_safety_qty))}`);
    //   row.push(`${number_format.strFix(parseInt(item.product_max_qty))}`);
    //   row.push(`${number_format.strFix(parseInt(item.stock_amount))}`);
    //   row.push(`${number_format.strFix(parseFloat(item.product_price), 2)}`);
    //   row.push(
    //     `${number_format.strFix(
    //       parseInt(item.stock_amount) * parseFloat(item.product_price),
    //       2
    //     )}`
    //   );
    //   rows.push(row);
    // }
    const excel_file = await exportToExcelUtility(
      rows,
      data.username,
      "Stock Low Stock",
      columns
    );
    const buffer = await excel_file.xlsx.writeBuffer();
    const filename =
      "Stock Low Stock" + data.date_start + " to " + data.date_end + ".xlsx";
    attachments.push({
      filename,
      content: buffer,
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }

  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: report_setting.data[0].email_user,
    cc: cc,
    subject: "Daily report ",
    text: `
        Daily report

      ${report_setting.data[0].email_signature}`,
    attachments: [...attachments],
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
};

Task.sendReceiveReport = async function sendReceiveReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await report_model.getReceiveReport(data, connection);
  connection.release();
  let cc = [];
  const columns = [
    { name: "วันที่", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "ประเภท", filterButton: true },
    { name: "ช่องที่", filterButton: false },
    { name: "คงเหลือหลังรับ", filterButton: false },
    { name: "ยืนยันคงเหลือหลังรับ", filterButton: false },
    { name: "ผู้นำเข้า", filterButton: false },
    { name: "จำนวนรับเข้า", filterButton: false },
    { name: "ราคาต่อชิ้น", filterButton: false },
    { name: "ราคารวม", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];

    row.push(`${item.event_date}`);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${item.stock_layout_code}`);
    row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
    row.push(`${item.fullname}`);
    row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
    row.push(`${number_format.strFix(parseFloat(item.stock_price), 2)}`);
    row.push(
      `${number_format.strFix(
        parseInt(item.stock_qty) * parseFloat(item.stock_price),
        2
      )}`
    );

    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Receive",
    columns,
    false
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Receive report " + data.date_start + " to " + data.date_end + ".xlsx";

  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Receive report " + data.date_start + " to " + data.date_end,
    text: `
    Receive report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
};

Task.sendIssueReport = async function sendIssueReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await report_model.getIssueReport(data, connection);
  connection.release();

  const columns = [
    { name: "วันที่", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "ประเภท", filterButton: true },
    { name: "ช่องที่", filterButton: true },
    { name: "คงเหลือหลังเบิก", filterButton: false },
    { name: "ยืนยันคงเหลือหลังเบิก", filterButton: false },
    { name: "ผู้เบิก", filterButton: true },
    { name: "งาน", filterButton: true },
    { name: "เครื่อง", filterButton: true },
    { name: "จำนวนเบิกออก", filterButton: false },
    { name: "ราคาต่อชิ้น", filterButton: false },
    { name: "ราคารวม", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];

    row.push(`${item.event_date}`);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${item.stock_layout_code}`);
    row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
    row.push(`${item.fullname}`);
    row.push(`${item.job_name}`);
    row.push(`${item.machine_name}`);
    row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
    row.push(`${number_format.strFix(parseFloat(item.stock_price), 2)}`);
    row.push(
      `${number_format.strFix(
        parseInt(item.stock_qty) * parseFloat(item.stock_price),
        2
      )}`
    );
    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Issue",
    columns
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Issue report " + data.date_start + " to " + data.date_end + ".xlsx";
  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  let cc = [];

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Issue report " + data.date_start + " to " + data.date_end,
    text: `
    Issue report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
};

Task.sendBalanceReport = async function sendBalanceReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);

  const result_data = await report_model.getBalanceReport(data, connection);
  connection.release();

  const columns = [
    { name: "ลำดับ", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "ประเภท", filterButton: true },
    { name: "ยกยอดมา", filterButton: false },
    { name: "รับเข้า", filterButton: false },
    { name: "เบิกออก", filterButton: false },
    { name: "คงเหลือ", filterButton: false },
    { name: "ราคาต่อชิ้น", filterButton: false },
    { name: "ราคารวม", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];
    const stock_amount =
      parseInt(item.stock_balance) +
      parseInt(item.stock_in) -
      parseInt(item.stock_out);
    row.push(index + 1);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${number_format.strFix(parseInt(item.stock_balance))}`);
    row.push(`${number_format.strFix(parseInt(item.stock_in))}`);
    row.push(`${number_format.strFix(parseInt(item.stock_out))}`);
    row.push(`${number_format.strFix(parseInt(stock_amount))}`);
    row.push(`${number_format.strFix(parseFloat(item.product_price), 2)}`);
    row.push(
      `${number_format.strFix(
        parseInt(stock_amount) * parseFloat(item.product_price),
        2
      )}`
    );
    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Balance",
    columns
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Balance report " + data.date_start + " to " + data.date_end + ".xlsx";
  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  let cc = [];

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Balance report " + data.date_start + " to " + data.date_end,
    text: `
    Balance report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
  connection.release();
};

Task.sendIncidentReport = async function sendIncidentReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await report_model.getIncidentReport(data, connection);

  const columns = [
    { name: "วันที่", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "ประเภท", filterButton: true },
    { name: "ประเภทการดำเนินการ", filterButton: true },
    { name: "ช่องที่", filterButton: true },
    { name: "ผู้ดำเนินการ", filterButton: true },
    { name: "จำนวน", filterButton: false },
    { name: "คงเหลือหลังดำเนินการ", filterButton: false },
    { name: "ยืนยันคงเหลือหลังดำเนินการ", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];

    row.push(`${item.event_date}`);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${item.stock_type ? item.stock_type : ""}`);
    row.push(`${item.stock_layout_code}`);
    row.push(`${item.fullname}`);
    row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Incident",
    columns
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Incident report " + data.date_start + " to " + data.date_end + ".xlsx";
  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  let cc = [];

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Incident report " + data.date_start + " to " + data.date_end,
    text: `
    Incident report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
  connection.release();
};

Task.sendTransactionReport = async function sendTransactionReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await report_model.getTransactionReport(data, connection);

  const columns = [
    { name: "วันที่", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "ประเภท", filterButton: true },
    { name: "ประเภทการดำเนินการ", filterButton: true },
    { name: "ช่องที่", filterButton: true },
    { name: "ผู้ดำเนินการ", filterButton: true },
    { name: "จำนวน", filterButton: false },
    { name: "คงเหลือหลังดำเนินการ", filterButton: false },
    { name: "ยืนยันคงเหลือหลังดำเนินการ", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];

    row.push(`${item.event_date}`);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${item.stock_type ? item.stock_type : ""}`);
    row.push(`${item.stock_layout_code}`);
    row.push(`${item.fullname}`);
    row.push(`${number_format.strFix(parseInt(item.stock_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.balance_confirm_qty))}`);
    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Transaction",
    columns
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Transaction report " + data.date_start + " to " + data.date_end + ".xlsx";
  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  let cc = [];

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Transaction report " + data.date_start + " to " + data.date_end,
    text: `
    Transaction report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
  connection.release();
};

Task.sendLowStockReport = async function sendLowStockReport(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await report_model.getLowStockReport(data, connection);

  const columns = [
    { name: "ลำดับ", filterButton: true },
    { name: "รหัสสินค้า", filterButton: true },
    { name: "ชื่อสินค้า", filterButton: true },
    { name: "จุดต่ำสุด (ชิ้น)", filterButton: false },
    { name: "จุดสั่งซื้อ (ชิ้น)", filterButton: false },
    { name: "จุดสูงสุด (ชิ้น)", filterButton: false },
    { name: "จำนวนคงเหลือ (ชิ้น)", filterButton: false },
    { name: "ราคาต่อชิ้น", filterButton: false },
    { name: "ราคารวม", filterButton: false },
  ];

  let rows = [];
  for (let index = 0; index < result_data.data.length; index++) {
    const item = result_data.data[index];
    const row = [];
    const stock_amount =
      parseInt(item.stock_balance) +
      parseInt(item.stock_in) -
      parseInt(item.stock_out);
    row.push(index + 1);
    row.push(`${item.product_code}`);
    row.push(`${item.product_name}`);
    row.push(`${item.stock_product_type ? item.stock_product_type : ""}`);
    row.push(`${number_format.strFix(parseInt(item.product_min_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.product_safety_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.product_max_qty))}`);
    row.push(`${number_format.strFix(parseInt(item.stock_amount))}`);
    row.push(`${number_format.strFix(parseFloat(item.product_price), 2)}`);
    row.push(
      `${number_format.strFix(
        parseInt(item.stock_amount) * parseFloat(item.product_price),
        2
      )}`
    );
    rows.push(row);
  }

  const excel_file = await exportToExcelUtility(
    rows,
    data.username,
    "Stock Low Stock",
    columns
  );
  const buffer = await excel_file.xlsx.writeBuffer();
  const filename =
    "Stock Low Stock report " +
    data.date_start +
    " to " +
    data.date_end +
    ".xlsx";
  var mail = nodemailer.createTransport({
    service: report_setting.data[0].email_service,
    auth: {
      user: report_setting.data[0].email_user,
      pass: report_setting.data[0].email_password,
    },
  });

  let cc = [];

  var mailOptions = {
    from: report_setting.data[0].email_user,
    to: data.send_setting_email,
    cc: cc,
    subject: "Transaction report " + data.date_start + " to " + data.date_end,
    text: `
    Transaction report ${data.date_start}  to  ${data.date_end}
    
    ${report_setting.data[0].email_signature}`,
    attachments: [
      {
        filename,
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { data: [], require: false, err: error };
    } else {
      return { data: info, require: true };
    }
  });
  connection.release();
};
Task.sendIssueEmail = async function sendIssueEmail(data) {
  const connection = await connect();
  const report_setting = await report_model.getSettingReport(data, connection);
  const result_data = await send_setting_model.getEmailBy(
    { key: "send_setting_issue_alway", value: "1" },
    connection
  );

  if (result_data.data.length > 0) {
    var mail = nodemailer.createTransport({
      service: report_setting.data[0].email_service,
      auth: {
        user: report_setting.data[0].email_user,
        pass: report_setting.data[0].email_password,
      },
    });
    let cc = [];

    for (let i = 1; i < result_data.data.length; i++) {
      cc.push(result_data.data[i].send_setting_email);
    }

    var mailOptions = {
      from: report_setting.data[0].email_user,
      to: result_data.data[0].send_setting_email,
      cc: cc,
      subject: "Issue " + data.product_code + " [" + data.event_date + "] ",
      text: ` เวลา ${data.event_date} คุณ ${data.user_firstname} ${data.user_lastname} ได้เบิกสินค้า ชื่อ [${data.product_code}]${data.product_name} จำนวน ${data.stock_qty} ชิ้น

    
    ${report_setting.data[0].email_signature}`,
      attachments: [],
    };

    mail.sendMail(mailOptions, function (error, info) {
      if (error) {
        return { data: [], require: false, err: error };
      } else {
        return { data: info, require: true };
      }
    });
  }
  connection.release();
};
module.exports = Task;
