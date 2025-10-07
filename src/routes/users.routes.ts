import { Router } from "express";
import { getAllUsersController } from "../controllers/users/getAllUsers.controller";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { updateUserByIdController } from "../controllers/users/updateUserById.controller";
import { deleteUserByIdController } from "../controllers/users/deleteUserById.controller";
import { createUserController } from "../controllers/users/createUser.controller";

const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.get("/", getAllUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.put("/:id", updateUserByIdController);
userRoutes.delete("/:id", deleteUserByIdController);

export default userRoutes;
