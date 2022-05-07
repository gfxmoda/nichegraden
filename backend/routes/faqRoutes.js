import express from "express";
import { getFAQs } from "../controllers/faqControllers.js";

const router = express.Router();

router.route("/").get(getFAQs);

export default router;
