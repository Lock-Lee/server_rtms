const connect = require("../models/BaseModel")
const inTransaction = require('../utils/inTransaction')
const JobOpTools_model = require("../models/JobOpToolsModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getJobOpToolsLastCode = async function getJobOpToolsLastCode(data) {
  const connection = await connect()

  const result = await JobOpTools_model.getJobOpToolsLastCode(data, connection)

  connection.release()
  return result;
};

Task.getJobOpToolsBy = async function getJobOpToolsBy(data) {
  const connection = await connect()

  const result = await JobOpTools_model.getJobOpToolsBy(data, connection)

  connection.release()
  return result;
};

Task.getJobOpToolsByCode = async function getJobOpToolsByCode(data) {
  const connection = await connect()

  const result = await JobOpTools_model.getJobOpToolsByCode(data, connection)

  connection.release()
  return result;
};

Task.updateJobOpToolsBy = async function updateJobOpToolsBy(data) {
 
 
  const result = await inTransaction(async (connection, next) => {
    const trans = []

     trans.tran1 = await   JobOpTools_model.updateJobOpToolsBy(data,connection);
     //trans.tran2 = await JobOpTools_supplier_model.updateJobOpToolsSupplierBy(data,connection);
  

    return next(trans)
})
  return result;
};

Task.insertJobOpTools = async function insertJobOpTools(data) {

    const result = await inTransaction(async (connection, next) => {
        const trans = []
    
        // trans.tran1 = await   JobOpTools_model.updateJobOpToolsBy(data,connection);
        // trans.tran2 = await JobOpTools_supplier_model.updateJobOpToolsSupplierBy(data,connection);
      
    
        return next(trans)
    })
  
 
  return result;
};

Task.deleteJobOpToolsByCode = async function deleteJobOpToolsByCode(data) {
  
  

  const result = await inTransaction(async (connection, next) => {
    const trans = []

    // trans.del1 = await    JobOpTools_model.deleteJobOpToolsByCode(data,connection);
    // trans.tran1 = await JobOpTools_supplier_model.deleteJobOpToolsSupplierByCode(data,connection);
  

    return next(trans)

})
  return result;
}

module.exports = Task

