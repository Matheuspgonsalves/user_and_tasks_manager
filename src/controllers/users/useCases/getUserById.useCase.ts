import prisma from "../../../configs/database";

export const findUserById = async (id: string) => {
  return await prisma.user.findMany({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};
