import { generateAPIError } from "../../errors/apiError.js";
import { errorWrapper } from "../../middleware/errorWrapper.js";
import {
  addTaskService,
  getTasksService,
  getTaskService,
  editTaskService,
  deleteTaskService,
} from "../../service/task.js";

const addTasks = errorWrapper(async (req, res, next) => {
  const tasks = await addTaskService(req.body.tasks);
  if (tasks.length > 0) {
    return res.status(200).json({
      success: true,
      message: "tasks added",
      data: tasks,
    });
  }
  return next(generateAPIError("tasks not added", 400));
});

const getTasks = errorWrapper(async (req, res, next) => {
  const tasks = await getTasksService(req.query.page, req.query.limit);
  if (tasks.length > 0) {
    return res.status(200).json({
      success: true,
      message: "tasks fetched",
      data: tasks,
    });
  }
  return next(generateAPIError("tasks not added", 404));
});

const getTask = errorWrapper(async (req, res, next) => {
  const task = await getTaskService(req.query.id);
  if (task) {
    return res.status(200).json({
      success: true,
      message: "task fetched",
      data: task,
    });
  }
  return next(generateAPIError("tasks not found", 404));
});

const editTask = errorWrapper(async (req, res, next) => {
  const task = await editTaskService(req.query.id, req.body);
  if (task) {
    return res.status(200).json({
      success: true,
      message: "task updated",
      data: task,
    });
  }
  return next(generateAPIError("tasks not found", 404));
});

const deleteTask = errorWrapper(async (req, res, next) => {
  const task = await deleteTaskService(req.query.id);
  if (task) {
    return res.status(200).json({
      success: true,
      message: "task updated",
      data: task,
    });
  }
  return next(generateAPIError("tasks not found", 404));
});

export { addTasks, getTasks, getTask, editTask, deleteTask };
