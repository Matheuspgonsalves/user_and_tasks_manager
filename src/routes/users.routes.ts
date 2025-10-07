import { Router } from "express";
import { getAllUsers } from "../http/users/getAllUsers.http";
import authMiddleware from "../middleware/auth-middleware";

const userRoutes = Router();

userRoutes.get("/", authMiddleware.checkToken, getAllUsers);
// userRoutes.get("/:id", getUserById);
// userRoutes.put("/:id", updateUserById);
// userRoutes.delete("/:id", deleteUserById);

export default userRoutes;
