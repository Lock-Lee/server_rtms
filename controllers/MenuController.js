const connect = require("../models/BaseModel")

const menu_model = require('../models/MenuModel')

const Task = function (task) {
    this.task = task.task
}

Task.getMenuBy = async function getMenuBy(data) {
    const connection = await connect()

    const result = await menu_model.getMenuBy(data, connection)

    connection.release()
    return result
}
Task.updateMenuBy = async function updateMenuBy(data) {
    const connection = await connect()

    const result = await menu_model.updateMenuBy(data, connection)

    connection.release()
    return result
}

module.exports = Task