import {Router} from "express";import path from "node:path";import {fileURLToPath} from "node:url";
const router=Router();const here=path.dirname(fileURLToPath(import.meta.url));const pdf=path.resolve(here,"../assets/Aman-Singh-Patel-Resume.pdf");
router.get("/view",(_req,res)=>res.sendFile(pdf,(err)=>{if(err&&!res.headersSent)res.status(404).json({error:"Resume PDF not found."});}));
router.get("/download",(_req,res)=>res.download(pdf,"Aman-Singh-Patel-Resume.pdf",(err)=>{if(err&&!res.headersSent)res.status(404).json({error:"Resume PDF not found."});}));
export default router;
