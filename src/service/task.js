import Task from "../models/Task"

// tasks is an object {task, assignTo, projectId}
const addTaskService = async (tasks) => {
    const task = await Task.insertMany(tasks)
    return task
}

export {
    addTaskService
}