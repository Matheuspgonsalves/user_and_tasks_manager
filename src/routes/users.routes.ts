import { Router } from "express";
import { getAllUsersController } from "../controllers/users/getAllUsers.controller";
import authMiddleware from "../middleware/auth-middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { updateUserByIdController } from "../controllers/users/updateUserById.controller";
import { deleteUserByIdController } from "../controllers/users/deleteUserById.controller";

const userRoutes = Router();

userRoutes.get("/", authMiddleware.checkToken, getAllUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.put("/:id", updateUserByIdController);
userRoutes.delete("/:id", deleteUserByIdController);

export default userRoutes;
