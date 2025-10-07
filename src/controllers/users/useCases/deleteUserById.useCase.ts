import prisma from "../../../configs/database";

export const deleteUserById = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};
