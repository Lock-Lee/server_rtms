const connect = require("../models/BaseModel")
const inTransaction = require('../utils/inTransaction')

const license_model = require('../models/LicenseModel')
const permission_model = require('../models/PermissionModel')

const Task = function (task) {
    this.task = task.task
}

Task.getLicenseLastCode = async function getLicenseLastCode(data) {
    const connection = await connect()

    const result = await license_model.getLicenseLastCode(data, connection)

    connection.release()
    return result
}
Task.getLicenseBy = async function getLicenseBy(data) {
    const connection = await connect()

    const result = await license_model.getLicenseBy(data, connection)

    connection.release()
    return result
}
Task.getLicenseByCode = async function getLicenseByCode(data) {
    const connection = await connect()

    const result = await license_model.getLicenseByCode(data, connection)

    connection.release()
    return result
}
Task.updateLicenseBy = async function updateLicenseBy(data) {
    const now = new Date();
    const result = await inTransaction(async (connection, next) => {
        const trans = []

        trans.del1 = await permission_model.deletePermissionByCode(data, connection)
        trans.tran1 = await license_model.updateLicenseBy(data, connection)
       
        trans.tran2 = await permission_model.insertPermission(data, connection)

        return next(trans)
    })

    return result
}
Task.insertLicense = async function insertLicense(data) {
    const result = await inTransaction(async (connection, next) => {
        const trans = []

        trans.del1 = await permission_model.deletePermissionByCode(data, connection)
        trans.tran1 = await license_model.insertLicense(data, connection)
        trans.tran2 = await permission_model.insertPermission(data, connection)

        return next(trans)
    })

    return result
}
Task.deleteLicenseByCode = async function deleteLicenseByCode(data) {
   
    const result = await inTransaction(async (connection, next) => {
        const trans = []

        trans.tran1 = await license_model.deleteLicenseByCode(data, connection)
        trans.tran2 = await permission_model.deletePermissionByCode(data, connection)
     
        return next(trans)
        
    })

    return result
}

module.exports = Task