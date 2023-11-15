import { Router } from "express";
import auth from "./auth.js";
import user from "./user.js";
import project from "./project.js";
import task from "./task.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("index.hbs");
})


router.use("/auth", auth);
router.use("/user", user);
router.use("/project", project);
router.use("/task", task);



export default router;