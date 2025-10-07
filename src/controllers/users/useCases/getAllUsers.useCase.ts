import prisma from "../../../configs/database";

export const findAllUsers = async () => {
  return await prisma.user.findMany();
};
