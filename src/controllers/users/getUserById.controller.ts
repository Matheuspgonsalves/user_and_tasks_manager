import { Request, Response } from "express";
import { findUserById } from "./useCases/getUserById.useCase";

export const getUserByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const userResult = await findUserById(id);

  if (userResult.error === "User ID is required") return res.status(400).send({ message: userResult.error });
  if (userResult.error === "User not found") return res.status(404).send({ message: userResult.error });

  return res.status(200).send({ message: "OK", user: userResult.user });
};
