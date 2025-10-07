import { Response } from "express";
import JwtRequest from "../../interfaces/authRequest.interface";
import { findUserById } from "./useCases/getUserById.useCase";
import { deleteUserById } from "./useCases/deleteUserById.useCase";

export const deleteUserByIdController = async (req: JwtRequest, res: Response) => {
  const id: string = req.params.id;

  const user = await deleteUserById(id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send({ message: "OK", user });
};
