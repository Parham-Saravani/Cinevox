import Router from "express";
import {createNewBanner} from "../controllers/banner.controller.js"
const router = Router();

router.get('/:slug', createNewBanner)

export default router;