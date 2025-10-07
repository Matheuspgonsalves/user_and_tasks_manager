import { Router } from "express";
import { createTaskController } from "../controllers/tasks/createTask.controller";
import { getAllTasksByNameController } from "../controllers/tasks/getAllTasksByName.controller";
import { getTaskByIdController } from "../controllers/tasks/getTaskById.controller";
import { updateTaskByIdController } from "../controllers/tasks/updateTaskById.controller";
import { deleteTaskByIdController } from "../controllers/tasks/deleteTaskById.controller";

const tasksRoutes = Router();

tasksRoutes.post("/", createTaskController);
tasksRoutes.get("/", getAllTasksByNameController);
tasksRoutes.get("/:id", getTaskByIdController);
tasksRoutes.put("/:id", updateTaskByIdController);
tasksRoutes.delete("/:id", deleteTaskByIdController);

export default tasksRoutes;
