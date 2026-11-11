import {Router} from "express";
import profile from "./profile.js";
import projects from "./projects.js";
import skills from "./skills.js";
import resume from "./resume.js";
const router=Router();
router.use("/profile",profile);router.use("/projects",projects);router.use("/skills",skills);router.use("/resume",resume);
export default router;
