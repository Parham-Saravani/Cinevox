import Router from "express";
import { takeAllSeries , takeSerie} from "../controllers/series.controller.js";

const router = Router();

router.get("/", takeAllSeries);
router.get("/:title", takeSerie);

export default router;