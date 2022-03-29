const connect = require("../models/BaseModel")
const department_controller = require("../models/DepartmentModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getDepartmentLastCode = async function getDepartmentLastCode(data) {
  const connection = await connect()

  const result = await department_controller.getDepartmentLastCode(data, connection)

  connection.release()
  return result;
};

Task.getDepartmentBy = async function getDepartmentBy(data) {
  const connection = await connect()

  const result = await department_controller.getDepartmentBy(data, connection)

  connection.release()
  return result;
};

Task.getDepartmentByCode = async function getDepartmentByCode(data) {
  const connection = await connect()

  const result = await department_controller.getDepartmentByCode(data, connection)

  connection.release()
  return result;
};

Task.updateDepartmentBy = async function updateDepartmentBy(data) {
  const connection = await connect()
  const result = await department_controller.updateDepartmentBy(data,connection);
  return result;
};

Task.insertDepartment = async function insertDepartment(data) {
  const connection = await connect()
  const result = await department_controller.insertDepartment(data,connection);
  connection.release()
  return result;
};

Task.deleteDepartmentByCode = async function deleteDepartmentByCode(data) {
  const connection = await connect()
  const result = await department_controller.deleteDepartmentByCode(data,connection);
  connection.release();
  return result;
};

module.exports = Task

