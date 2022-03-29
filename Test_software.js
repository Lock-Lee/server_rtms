const express = require("express");
const bodyParser = require("body-parser");
const scoketIO = require("socket.io");
//=============== Import node-cron ==========================
var cron = require("node-cron");
const email_controller = require("./controllers/EmailController");
const send_setting_model = require("./models/SendSettingModel");
const connect = require("./models/BaseModel");
const TimeFormat = require("./utils/TimeFormat");

const time_format = new TimeFormat();
var date_ob = new Date();
var date = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var day = date_ob.getDay();
var hours = date_ob.getHours();
var minutes = date_ob.getMinutes();
let email_send = [];
let SendSetting = [];

var getTime = async () => {
  console.log("get Time");
  const connection = await connect();
  const result = await send_setting_model.getSendSettingBy(
    { send_setting_time: hours + ":" + minutes + ":00" },
    connection
  );

  SendSetting = result;
  result.data.forEach(async (element) => {
    const data = await send_setting_model.getEmailByAuto(
      { send_setting_code: element.send_setting_code },
      connection
    );

    email_send.push({
      ...element,
      email: data.data,
    });
  });
  connection.release();
};
const AutoSendEmail = async () => {
  cron.schedule("0 0 * * * * *", async () => {
    getTime();
  });
  cron.schedule("*/1 * * * * *", async () => {
    let date_ob = new Date();
    var date = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var day = date_ob.getDay();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);

    console.log(date_start, date_end);
    email_send.forEach(async (item, idx, data) => {
      if (
        item.send_setting_time_type == "EveryDay" &&
        hours + ":" + minutes + ":" + seconds === item.send_setting_time + ":00"
      ) {
        let date_start = time_format.dateToStr(
          new Date(date_ob.getFullYear(), date_ob.getMonth(), 1)
        );
        let date_end = time_format.dateToStr(
          new Date(date_ob.getFullYear(), date_ob.getMonth() + 1, 0)
        );
        await email_controller.runSendReport({
          data: data[idx],
          date_end: date_end,
          date_start: date_start,
          time_start: "",
          time_end: "",
        });
      } else if (
        item.send_setting_time_type == "EveryWeek" &&
        item.send_setting_date + "" == day + "" && //0-6
        item.send_setting_time + ":00" == hours + ":" + minutes + ":" + seconds
      ) {
        let date_start = time_format.dateToStr(
          new Date(
            date_ob.getFullYear(),
            date_ob.getMonth(),
            date_ob.getDate() - date_ob.getDay()
          )
        );
        let date_end = time_format.dateToStr(
          new Date(
            date_ob.getFullYear(),
            date_ob.getMonth(),
            date_ob.getDate() - date_ob.getDay() + 6
          )
        );
        await email_controller.runSendReport({
          data: data[idx],
          date_end: date_end,
          date_start: date_start,
          time_start: "",
          time_end: "",
        });
      } else if (
        item.send_setting_time_type == "EveryMonth" &&
        item.send_setting_time + ":00" ==
          hours + ":" + minutes + ":" + seconds &&
        item.send_setting_date == date //1-31
      ) {
        let date_start = time_format.dateToStr(
          new Date(date_ob.getFullYear(), date_ob.getMonth(), 1)
        );
        let date_end = time_format.dateToStr(
          new Date(date_ob.getFullYear(), date_ob.getMonth() + 1, 0)
        );
        await email_controller.runSendReport({
          data: data[idx],
          date_end: date_end,
          date_start: date_start,
          time_start: "",
          time_end: "",
        });
      } else if (item.send_setting_time_type == "EveryDay") {
        // await email_controller.runSendReport({
        //   data: data[idx],
        //   date_end: date_end,
        //   date_start: date_start,
        // time_start: "",
        // time_end: "",
        // });
      }
    });

    console.log("---------------------");
    console.log("Running Cron Job");
    console.log(day + "-" + month + "-" + date);
    console.log(hours + ":" + minutes + ":" + seconds);
    console.log("---------------------");
  });
};

getTime();
AutoSendEmail();
//=============== end node-cron ==========================

// const SerialPort = require("serialport");
// const Readline = require("@serialport/parser-readline");

const publicDir = require("path").join(__dirname, "/public/");

const app = express();

const PORT = process.env.PORT || 7001;

app.use(express.static(publicDir));

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token,Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});
const appMicro = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const appRouteLicense = require("./routes/appRouteLicense");
const appRouteMenu = require("./routes/appRouteMenu");
const appRouteSupplier = require("./routes/appRouteSupplier");
const appRoutePermission = require("./routes/appRoutePermission");

const appRouteMachine = require("./routes/appRouteMachine");
const appRouteMachineBrand = require("./routes/appRouteMachineBrand");
const appRouteMachineModel = require("./routes/appRouteMachineModel");
const appRouteMachineType = require("./routes/appRouteMachineType");

const appRouteProductBrand = require("./routes/appRouteProductBrand");
const appRouteProductGroup = require("./routes/appRouteProductGroup");
const appRouteProductType = require("./routes/appRouteProductType");
const appRouteProductMenu = require("./routes/appRouteProductMenu");
const appRouteProductMenuList = require("./routes/appRouteProductMenuList");
const appRouteProduct = require("./routes/appRouteProduct");

const appRouteUser = require("./routes/appRouteUser");

const appRouteFileUpload = require("./routes/appRouteFileUpload");
const appRoutedepartment = require("./routes/appRouteDepartment");

const appRouteproductsupplier = require("./routes/appRouteProductSupplier");

const appRouteJob = require("./routes/appRouteJob");
const appRouteJobOp = require("./routes/appRouteJobOp");
const appRouteJobOpTools = require("./routes/appRouteJobOpTools");
const appRouteJobOpToolsUse = require("./routes/appRouteJobOpToolsUse");

const appRouteJobLevel1 = require("./routes/appRouteJobLevel1");
const appRouteJobLevel2 = require("./routes/appRouteJobLevel2");
const appRouteJobLevel3 = require("./routes/appRouteJobLevel3");
const appRouteJobLevel4 = require("./routes/appRouteJobLevel4");

const appRouteReceiveTool = require("./routes/appRouteReceiveTool");
const appRouteTakeOutTool = require("./routes/appRouteTakeoutTool");
const appRouteToollife = require("./routes/appRouteToollifeRecord");
const appRouteStock = require("./routes/appRouteStock");
const appRouteStockLayout = require("./routes/appRouteStockLayout");

const appRouteProduction = require("./routes/appRouteProduction");

const appRouteUserType = require("./routes/appRouteUserType");
const appRouteUserGroup = require("./routes/appRouteUserGroup");
const appRouteUserGroupProduct = require("./routes/appRouteUserGroupProduct");
const appRouteUserLicenseGroup = require("./routes/appRouteUserLicenseGroup");

const appRouteStockLog = require("./routes/appRouteStockLog");
const appRouteReport = require("./routes/appRouteReport");
const appRouteSendSetting = require("./routes/appRouteSendSetting");
const appRouteEmail = require("./routes/appRouteEmail");

const appRouteSuccess = require("./routes/appRouteSuccess");
const appRouteToollifeRecord = require("./routes/appRouteToollifeRecord");

const appRouteIncident = require("./routes/appRouteIncident");
const appRouteSettingCostCenter = require("./routes/appRouteSettingCostCenter");

const appRouteReturn = require("./routes/appRouteReturn");

const appRouteDefaultTime = require("./routes/appRouteDefaultTime");

const appRouteIssue = require("./routes/appRouteIssue");

const appRouteReorder = require("./routes/appRouteReorder");
const appRouteReorderList = require("./routes/appRouteReorderList");

appRouteReorder(app);
appRouteReorderList(app);
appRouteDefaultTime(app);
appRouteReturn(app);
appRouteSettingCostCenter(app);
appRouteIncident(app);

appRouteSuccess(app);
appRouteToollifeRecord(app);

appRouteUserGroupProduct(app);
appRouteStock(app);
appRouteStockLayout(app);
appRouteToollife(app);

appRouteReceiveTool(app);
appRouteTakeOutTool(app);
appRouteStockLog(app);
appRouteLicense(app);
appRouteMenu(app);

appRouteSupplier(app);
appRoutePermission(app);

appRouteProduction(app);

appRouteMachine(app);
appRouteMachineBrand(app);
appRouteMachineModel(app);
appRouteMachineType(app);

appRouteProductBrand(app);
appRouteProductGroup(app);
appRouteProductType(app);
appRouteProductMenu(app);
appRouteProductMenuList(app);
appRouteProduct(app);

appRouteUser(app);
appRouteUserType(app);

appRouteFileUpload(app);
appRoutedepartment(app);

appRouteproductsupplier(app);

appRouteJob(app);
appRouteJobOp(app);
appRouteJobOpTools(app);
appRouteJobOpToolsUse(app);

appRouteJobLevel1(app);
appRouteJobLevel2(app);
appRouteJobLevel3(app);
appRouteJobLevel4(app);

appRouteUserLicenseGroup(app);
appRouteUserGroup(app);
appRouteSendSetting(app);
appRouteReport(app);
appRouteEmail(app);

appRouteIssue(app);
//-------------------------------------

var clients = {};
const io = scoketIO.listen(appMicro);

var connectArd = function () {
  // SerialPort.list().then((ports) => {
  //   ports = "COM8";
  //   const Serialport = new SerialPort(ports, {
  //     baudRate: 9600,
  //   });

  //  const parser = Serialport.pipe(new Readline({}));

  //   parser.on("data", (line) => {
  //     // console.log("data=>", line);
  //     io.sockets.emit("answer-micro", line);
  //   });

  //   Serialport.on("close", function (err) {
  //     // console.log("close: ", err.message);
  //     //reconnectArd();
  //   });
  //   Serialport.on("error", function (err) {
  //     // console.log("Error: ", err.message);
  //     // reconnectArd();
  //   });

  //   //Even ที่จะทำเมื่อ เมื่อOpen
  //   Serialport.on("open", function (message) {
  //     // console.log("open port");
  //     //console.log(message);
  //   });

  // });
  io.on("connection", async (client) => {
    // เมื่อ Client ตัดการเชื่อมต่อ
    clients[client.id] = client;
    io.sendBuffer = [];

    console.log("user connected");
    client.on("disconnect", (message) => {
      delete clients[client.id];
      io.sendBuffer = [];
    });

    clients[client.id].on("connect-micro", function (message) {
      console.log(message);
      io.sockets.emit("new-message", message);

      io.sockets.emit("answer-micro", "CC-RUNNING\r");
      io.sockets.emit("answer-micro", "CC-FINISH\r");
      io.sockets.emit("answer-micro", "CC-DOORCLOSE\r");

      setTimeout(() => {
        io.sockets.emit("answer-micro", "CR-RUNNING\r");
      }, 2000);

      setTimeout(() => {
        io.sockets.emit("answer-micro", "CR-READY\r");
      }, 3000);

      //   Serialport.write(">" + message + "<");
    });
  });
};

connectArd();
var reconnectArd = function () {
  // console.log("INITIATING RECONNECT");
  //io.sockets.emit("answer-micro", "CR-NOTCONNECT");

  setTimeout(function () {
    //  console.log("RECONNECTING TO ARDUINO");
    connectArd();
  }, 5000);
};
