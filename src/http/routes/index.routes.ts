import { Router } from "express";
import userRoutes from "./users.routes";
// import authMiddleware from "../../middleware/auth-middleware";

const routes = Router();

routes.use("/auth", userRoutes);

export default routes;