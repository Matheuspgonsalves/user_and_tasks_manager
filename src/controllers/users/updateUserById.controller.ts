import { Request, Response } from "express";
import Joi from "joi";
import { Users } from "../../interfaces/users.interface";
import { updateUserUseCase } from "./useCases/updateUser.useCase";

const registerSchema: Joi.Schema<Users> = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const updateUserByIdController = async (req: Request, res: Response) => {
  const body: Users = req.body;
  const userId: string = req.params.id;
  const userValidation: any = registerSchema.validate(body);

  if (userValidation.error) {
    return res
      .status(400)
      .send({ message: userValidation.error.details[0].message });
  }

  const updateUser = await updateUserUseCase(body, userId);

  if (!updateUser) {
    return res.status(409).send({ message: "User not found" });
  }

  return res.status(201).send({
    message: "User successfully updated",
    user: updateUser,
  });
};
