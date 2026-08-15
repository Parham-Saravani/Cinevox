import Router from "express";
import { takeHomeData } from "../controllers/home.controller.js";


const router = Router();

router.get("/", takeHomeData);

export default router;
