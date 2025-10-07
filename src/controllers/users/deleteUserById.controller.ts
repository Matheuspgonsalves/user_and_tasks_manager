import { Request, Response } from "express";
import { deleteUserById } from "./useCases/deleteUserById.useCase";

export const deleteUserByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const user = await deleteUserById(id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send({ message: "OK", user });
};
