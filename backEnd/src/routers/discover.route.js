import Router from "express";
import { takeSimilarContent , takeTrendContent , takeNewContent , takePopularContent , takeRecommendedContent} from "../controllers/discover.controller.js";
const router = Router();

router.get('/trending', takeTrendContent)
router.get('/newRelease', takeNewContent)
router.get('/popular', takePopularContent)
router.get('/recommend', takeRecommendedContent)

router.get('/similar/:slug', takeSimilarContent)
export default router;