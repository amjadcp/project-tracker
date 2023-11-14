import {Router} from "express"

import { addUsers, deleteUser, editUser, getUser, getUsers } from "../controllers/user/user.js";
const router = Router()


router.post("/", addUsers)
router.get("/", getUsers)
router.get("/:id", getUser)
router.put("/:id", editUser)
router.delete("/:id", deleteUser)

export default router
