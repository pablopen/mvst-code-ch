import { Router } from "express";

import { getTime, addTime } from "../controllers/times";

const router = Router();

router.get("/", getTime);
router.put("/", addTime);

export default router;
