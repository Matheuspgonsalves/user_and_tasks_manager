import { Request, Response } from "express";
import { Users } from "../../interfaces/users.interface";
import Joi from "joi";
import prisma from "../../configs/database";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import authMiddleware from "../../middleware/auth-middleware";

const loginSchema: Joi.Schema<Omit<Users, "password" | "name" | "id">> = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userLogin = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userValidation: Joi.ValidationResult<Omit<Users, "password" | "name" | "id">> = loginSchema.validate(body); 

  if (userValidation.error) {
    return res.status(400).send({message: userValidation.error.details[0].message});
  }

  const {email, password} = body;

  const user: Users | null = await prisma.user.findUnique({
    where: {email}
  });

  if (!user) {
    return res.status(400).send({error: "Invalid email or password"});
  }

  const isPaswordValid: boolean = await bcrypt.compare(password, user.password);

  if (!isPaswordValid) {
    return res.status(400).send({error: "Invalid email or password"});
  }

  const payload: any = {
  id: user.id,
  email: user.email,
};

  const newAccessToken: string = jsonwebtoken.sign(payload, authMiddleware.MySecretWord, {expiresIn: "24h"});

  return res.status(200).send({
    message: "Login successfuly",
    ...payload,
    newAccessToken,
  });
}