import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

export async function GET(request: Request) {
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
