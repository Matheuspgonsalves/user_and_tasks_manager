import { Response } from "express";
import JwtRequest from "../../interfaces/authRequest.interface";
import { findAllUsers } from "./useCases/getAllUsers.useCase";

export const getAllUsersController = async (req: JwtRequest, res: Response) => {
  const user_id: string = req.jwt!.id;

  const ADMIN_UID: string = process.env.ADMIN_UID || "";

  // Validação mínima para exibir todos os usuários. O id do usuário deve ser igual ao adicionado no .env
  if (user_id !== ADMIN_UID) {
    return res.status(403).send({ message: "Forbidden" });
  }

  const allUsers = await findAllUsers();

  return res.status(200).send({ message: "OK", allUsers });
};
