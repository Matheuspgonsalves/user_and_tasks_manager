import { Request, Response } from "express";
import { deleteUserById } from "./useCases/deleteUserById.useCase";

export const deleteUserByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const userResult = await deleteUserById(id);

  if (userResult.error === "User ID is required") return res.status(400).send({ message: userResult.error });
  if (userResult.error === "User not found") return res.status(404).send({ message: userResult.error });
  if (userResult.error) return res.status(500).send({ message: userResult.error });

  return res.status(200).send({ message: "OK", userResult });
};
