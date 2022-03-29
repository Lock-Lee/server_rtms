const connect = require("../models/BaseModel")
const inTransaction = require('../utils/inTransaction')
const JobOpToolsUses_model = require("../models/JobOpToolsUsesModel");

const Task = function (task) {
  this.task = task.task;
};

Task.getJobOpToolsUsesLastCode = async function getJobOpToolsUsesLastCode(data) {
  const connection = await connect()

  const result = await JobOpToolsUses_model.getJobOpToolsUsesLastCode(data, connection)

  connection.release()
  return result;
};

Task.getJobOpToolsUsesBy = async function getJobOpToolsUsesBy(data) {
  const connection = await connect()

  const result = await JobOpToolsUses_model.getJobOpToolsUsesBy(data, connection)

  connection.release()
  return result;
};

Task.getJobOpToolsUsesByCode = async function getJobOpToolsUsesByCode(data) {
  const connection = await connect()

  const result = await JobOpToolsUses_model.getJobOpToolsUsesByCode(data, connection)

  connection.release()
  return result;
};

Task.updateJobOpToolsUsesBy = async function updateJobOpToolsUsesBy(data) {
 
 
  const result = await inTransaction(async (connection, next) => {
    const trans = []

     trans.tran1 = await   JobOpToolsUses_model.updateJobOpToolsUsesBy(data,connection);
     //trans.tran2 = await JobOpToolsUser_supplier_model.updateJobOpToolsUserSupplierBy(data,connection);
  

    return next(trans)
})
  return result;
};

Task.insertJobOpToolsUses = async function insertJobOpToolsUses(data) {

    const result = await inTransaction(async (connection, next) => {
        const trans = []
    
        // trans.tran1 = await   JobOpToolsUser_model.updateJobOpToolsUserBy(data,connection);
        // trans.tran2 = await JobOpToolsUser_supplier_model.updateJobOpToolsUserSupplierBy(data,connection);
      
    
        return next(trans)
    })
  
 
  return result;
};

Task.deleteJobOpToolsUsesByCode = async function deleteJobOpToolsUsesByCode(data) {
  
  

  const result = await inTransaction(async (connection, next) => {
    const trans = []

    // trans.del1 = await    JobOpToolsUser_model.deleteJobOpToolsUserByCode(data,connection);
    // trans.tran1 = await JobOpToolsUser_supplier_model.deleteJobOpToolsUserSupplierByCode(data,connection);
  

    return next(trans)

})
  return result;
}

module.exports = Task

