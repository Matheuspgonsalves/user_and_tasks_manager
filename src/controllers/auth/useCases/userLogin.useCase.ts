import { error } from "console";
import prisma from "../../../configs/database";
import { Users } from "../../../interfaces/users.interface";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import authMiddleware from "../../../middleware/auth-middleware";

export const userLoginUseCase = async (data: Omit<Users, "name" | "id">) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Email or password invalid" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Email or password invalid" };
  }

  const payload: any = {
    id: user.id,
    email: user.email,
  }

  const newAccesToken: string = jsonwebtoken.sign(payload, authMiddleware.MySecretWord,{ expiresIn: "24h" });
  
  return { 
    newAccesToken 
  };
};
