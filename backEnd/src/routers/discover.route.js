import Router from "express";
import { takeSimilarContent , takeTrendContent} from "../controllers/discover.controller.js";
const router = Router();

router.get('/trending', takeTrendContent)
router.get('/similar/:slug', takeSimilarContent)
export default router;