import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function getAllCategory() {
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });

  return categories.map(({ id, name }) => ({ id, name }));
}

export { getAllCategory };
