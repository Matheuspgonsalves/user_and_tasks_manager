import { Request, Response } from "express";
import Joi from "joi";
import { Users } from "../../interfaces/users.interface";
import prisma from "../../configs/database";
import bcrypt from "bcrypt";

const registerSchema: Joi.Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const createUsers = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userValidation: any = registerSchema.validate(body);

  if (userValidation.error) {
    return res
      .status(400)
      .send({ message: userValidation.error.details[0].message });
  }

  const {name, email, password} = body;

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return res.status(400).send({error: "Email already exists"});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      return res.status(400).send({error: "User not created"});
    } 

    const {password: _, ...userWithoutPassword} = newUser;

    return res.status(201).send({
      message: "User created",
      user: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).send({error: "Faild to create user"});
  }
};