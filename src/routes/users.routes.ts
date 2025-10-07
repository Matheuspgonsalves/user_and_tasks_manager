import { Router } from "express";
import { getAllUsersController } from "../controllers/users/getAllUsers.controller";
import authMiddleware from "../middleware/auth-middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";

const userRoutes = Router();

userRoutes.get("/", authMiddleware.checkToken, getAllUsersController);
userRoutes.get("/:id", getUserByIdController);
// userRoutes.put("/:id", updateUserById);
// userRoutes.delete("/:id", deleteUserById);

export default userRoutes;
