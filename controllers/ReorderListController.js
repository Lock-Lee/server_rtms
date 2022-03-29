const connect = require("../models/BaseModel");
const reorder_model = require("../models/ReorderModel");
const reorderlist_model = require("../models/ReorderListModel");
const Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getReorderListByReordersCode = async function getReorderListByReordersCode(data) {
    const connection = await connect();

    const result = await reorderlist_model.getReorderListByReordersCode(data, connection);

    connection.release();
    return result;
};

Task.insertReorder = async function insertReorder(data) {
    const connection = await connect();

    const result = await reorder_model.insertReorder(data, connection);

    connection.release();
    return result;
};



module.exports = Task;
