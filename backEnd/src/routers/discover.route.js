import Router from "express";
import { takeSimilarContent } from "../controllers/discover.controller.js";
const router = Router();

router.get('/similar/:slug', takeSimilarContent)
export default router;