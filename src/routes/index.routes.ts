import { Router } from "express";
import userRoutes from "./users.routes";
import authRoutes from "./auth.routes";
// import authMiddleware from "../../middleware/auth-middleware";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);

export default routes;