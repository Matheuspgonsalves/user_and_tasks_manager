import { Router } from "express";
import { createUserController } from "../controllers/auth/createUser.controller";
import { userLoginController } from "../controllers/auth/userLogin.controller";

const authRoutes = Router();

authRoutes.post("/register", createUserController);
authRoutes.post("/login", userLoginController);

export default authRoutes;
