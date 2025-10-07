import { Request, Response } from "express";
import { findAllUsers } from "./useCases/getAllUsers.useCase";

export const getAllUsersController = async (req: Request, res: Response) => {
  const allUsers = await findAllUsers();

  return res.status(200).send({ message: "OK", allUsers });
};
