import { Response } from "express";
import JwtRequest from "../../interfaces/authRequest.interface";
import prisma from "../../configs/database";

export const getAllUsers = async (req: JwtRequest, res: Response) => {
  const user_id: string = req.jwt!.id;

  const ADMIN_UID: string = process.env.ADMIN_UID || "";
  if (user_id !== ADMIN_UID) {
    return res.status(403).send({message: "Forbidden"});
  }

  const allUsers = await prisma.user.findMany({
    where: {id: user_id},
    select: {
      id: true,
      name: true,
      email: true
    }
  });

  return res.status(200).send({ message: "OK", allUsers });
};