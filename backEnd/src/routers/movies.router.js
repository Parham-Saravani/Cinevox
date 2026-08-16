import Router from "express";
import { takeAllMovies, takeMovieData } from "../controllers/movies.controller.js";
const router = Router();

router.get("/", takeAllMovies);
router.get("/:title", takeMovieData);

export default router;
