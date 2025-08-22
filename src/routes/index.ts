import { Router } from "express";
import userRoutes from "./users";

const router = Router();

router.use("/users", userRoutes);

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;
