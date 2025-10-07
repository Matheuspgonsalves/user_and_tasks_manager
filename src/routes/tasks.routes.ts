import { Router } from "express";
import { createTaskController } from "../controllers/tasks/createTask.controller";

const tasksRoutes = Router();

tasksRoutes.post("/", createTaskController);

export default tasksRoutes;
