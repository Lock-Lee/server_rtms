const { authJwt } = require("../middlewares");
const department_controller = require("../controllers/DepartmentController");

module.exports = function (app) {
  app.post("/department/getDepartmentLastCode", authJwt.verifyToken, async function (req, res) {
    const result = await department_controller.getDepartmentLastCode(req.body);
    res.send(result);
  });

  app.post("/department/getDepartmentBy", authJwt.verifyToken, async function (req, res) {
    const result = await department_controller.getDepartmentBy(req.body);
    res.send(result);
  });

  app.post("/department/getDepartmentByCode", authJwt.verifyToken, async function (req, res) {
    const result = await department_controller.getDepartmentByCode(req.body);
    res.send(result);
  });

  app.post("/department/insertDepartment", authJwt.verifyToken, async function (req, res) {
    const result = await department_controller.insertDepartment(req.body);
    res.send(result);
  });

  app.post("/department/updateDepartmentBy", authJwt.verifyToken, async function (req, res) {
    const result = await department_controller.updateDepartmentBy(req.body);
    res.send(result);
  });

  app.post("/department/deleteDepartmentByCode", authJwt.verifyToken, async function (req, res) {
  
    const result = await department_controller.deleteDepartmentByCode(req.body);
    res.send(result);
  });
};
