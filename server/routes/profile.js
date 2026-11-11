import {Router} from "express";import profile from "../data/profile.json" with {type:"json"};
const router=Router();router.get("/",(_req,res)=>res.json(profile));export default router;
