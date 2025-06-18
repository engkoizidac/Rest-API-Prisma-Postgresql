import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();
const controller = new AuthController();

router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.get("/protected", requireAuth, controller.protected);

export default router;
