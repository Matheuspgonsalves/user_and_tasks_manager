import { Request, Response } from "express";
import { findUserById } from "./useCases/getUserById.useCase";

export const getUserByIdController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const user = await findUserById(id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send({ message: "OK", user });
};
