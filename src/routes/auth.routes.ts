import { Router } from "express";
import { createUsers } from "../http/auth/createUser.http";
import { userLogin } from "../http/auth/userLogin.http";

const authRoutes = Router();

authRoutes.post("/register", createUsers);
authRoutes.post("/login", userLogin);

export default authRoutes;