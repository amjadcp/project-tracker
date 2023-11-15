import Task from "../models/Task.js"

// tasks is an array of object {task, assignTo, projectId}
const addTaskService = async (tasks) => {
    const task = await Task.insertMany(tasks)
    return task
}

const getTasksService = async (page, limit) => {
    page = parseInt(page)
    limit = parseInt(limit)
    const tasks = await Task.find().skip(page * limit).limit(limit)
    return tasks
}

const getTaskService = async (id) => {
    const task = await Task.findOne({ _id: id })
    return task
}

// data object {task, assignTo, projectId}
const editTaskService = async (id, data) => {
    const task = await Task.findOneAndUpdate({ _id: id }, data, { new: true })
    return task
}

const deleteTaskService = async (id) => {
    const task = await Task.findOneAndDelete({ _id: id })
    return task
}

export {
    addTaskService,
    getTasksService,
    getTaskService,
    editTaskService,
    deleteTaskService
}