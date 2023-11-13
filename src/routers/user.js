import {Router} from "express"

import { addUsers } from "../controllers/user/user.js";
const router = Router()


router.post("/", addUsers)

export default router
