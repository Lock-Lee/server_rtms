const express = require("express");
const bodyParser = require("body-parser");

//=============== Import node-cron ==========================
var cron = require("node-cron");
const email_controller = require("./controllers/EmailController");
const TimeFormat = require("./utils/TimeFormat");

const time_format = new TimeFormat();

// cron.schedule("* * * * *", async () => {
//   console.log("Start send report to email.");
//   const date = Date.now();
//   let date_start = time_format.dateToStr(
//     new Date(date.getFullYear(), date.getMonth(), date.getDay() - 1)
//   );
//   let date_end = time_format.dateToStr(
//     new Date(date.getFullYear(), date.getMonth(), date.getDay() - 1)
//   );
//   const hour = ("0" + date.getHours()).slice(-2);
//   const minute = ("0" + date.getMinutes()).slice(-2);
//   await email_controller.runSendReport({ date_start, date_end, hour, minute });
// });

//=============== Import node-cron ==========================

const socketIO = require("socket.io");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

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
const io = socketIO.listen(appMicro);
var connectArd = function () {
  SerialPort.list().then((ports) => {
    ports = "COM8";
    const Serialport = new SerialPort(ports, {
      baudRate: 9600,
    });

    const parser = Serialport.pipe(new Readline({}));

    parser.on("data", (line) => {
      console.log("data=>", line);
      io.sockets.emit("answer-micro", line);
    });

    Serialport.on("close", function (err) {
      console.log("close: ", err.message);
      reconnectArd();
    });
    Serialport.on("error", function (err) {
      // console.log("Error: ", err.message);
      reconnectArd();
    });

    // //Even ที่จะทำเมื่อ เมื่อOpen
    Serialport.on("open", function (message) {
      console.log("open port");
      console.log(message);
    });

    io.on("connection", async (client) => {
      // เมื่อ Client ตัดการเชื่อมต่อ
      clients[client.id] = client;
      io.sendBuffer = [];

      console.log("user connected");
      client.on("disconnect", (message) => {
        delete clients[client.id];
        io.sendBuffer = [];
      });
      console.log(clients[client.id].id);

      // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
      clients[client.id].on("connect-micro", function (message) {
        console.log(">" + message);
        Serialport.write(">" + message + "<");
      });
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
