import { Router } from "express";
import { createUsers } from "../auth/createUser.http";

const userRoutes = Router();

userRoutes.post("/", createUsers);
// userRoutes.get("/", getUsers);
// userRoutes.get("/:id", getUserById);
// userRoutes.put("/:id", updateUserById);
// userRoutes.delete("/:id", deleteUserById);

export default userRoutes;