import {Router} from "express"

import { addProject, assignTeam, deleteProject, editProject, getProject, getProjects } from "../controllers/project/project.js";
const router = Router()


router.post("/", addProject)
router.get("/", getProjects)
router.get("/:id", getProject)
router.put("/:id", editProject)
router.delete("/:id", deleteProject)

router.post("/team", assignTeam)

export default router
