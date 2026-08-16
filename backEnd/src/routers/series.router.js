import Router from "express";
import { takeAllSeries } from "../controllers/series.controller.js";

const router = Router();

router.get("/", takeAllSeries);

export default router;
