import prisma from "../../../configs/database";
import { Users } from "../../../interfaces/users.interface";

export const updateUserUseCase = async (data: Users, id: string) => {
  const { name, email, password } = data;
  
  const updateData: any = {};

  if (name !== undefined) updateData.name = name;
  if (email !== undefined) updateData.email = email;
  if (password !== undefined) updateData.password = password;

  const updateUser = await prisma.user.update({
    where: { id },
    data: updateData
  });

  return { updated_user: updateUser };
}