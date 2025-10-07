import { Request, Response } from "express";
import { Users } from "../../interfaces/users.interface";
import Joi from "joi";
import { userLoginUseCase } from "./useCases/userLogin.useCase";

const loginSchema: Joi.Schema<Omit<Users, "password" | "name" | "id">> =
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

export const userLoginController = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userValidation: Joi.ValidationResult<
    Omit<Users, "password" | "name" | "id">
  > = loginSchema.validate(body);

  if (userValidation.error) {
    return res
      .status(400)
      .send({ message: userValidation.error.details[0].message });
  }

  const result = await userLoginUseCase(body);

  if (result.error) {
    return res.status(401).send({ message: result.error });
  }

  return res.status(200).send({
    message: "Login successfuly",
    ...result,
  });
};
