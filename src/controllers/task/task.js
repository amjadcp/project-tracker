import { generateAPIError } from "../../errors/apiError.js";
import {errorWrapper}  from "../../middleware/errorWrapper.js";
import { addTaskService } from "../../service/task.js";


const addTask = errorWrapper(async(req, res, next)=>{
    // logic
    const tasks = await addTaskService(req.body.tasks)
    if (tasks.length > 0) {
        return res.status(200).json({
            success: true,
            message: 'tasks added',
            data: tasks
        })
    }
    return next(generateAPIError('tasks not added', 400))
})

export {
    addTask
}