import Router from "express";
import { takeMovies } from "../controllers/movies.controller.js";
const router = Router();

router.get("/", takeMovies);
export default router;
