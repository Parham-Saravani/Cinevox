import Router from "express";
import { takeMovies, takeMovieData } from "../controllers/movies.controller.js";
const router = Router();

router.get("/", takeMovies);
router.get("/:title", takeMovieData);

export default router;
