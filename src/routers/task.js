import {Router} from "express"

import { addTasks, deleteTask, editTask, getTask, getTasks } from "../controllers/task/task.js";
const router = Router()


router.post("/", addTasks)
router.get("/", getTasks)
router.get("/:id", getTask)
router.put("/:id", editTask)
router.delete("/:id", deleteTask)

export default router
