const connect = require("../models/BaseModel")

const permission_model = require('../models/PermissionModel')

const Task = function (task) {
    this.task = task.task
}

Task.getPermissionBy = async function getPermissionBy(data) {
    const connection = await connect()

    const result = await permission_model.getPermissionBy(data, connection)
    
    connection.release()
    return result
}

module.exports = Task