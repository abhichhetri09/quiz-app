import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const categoryId = parseInt(params.id); // Convert string to number

  if (isNaN(categoryId)) {
    return new Response(JSON.stringify({ error: "Invalid category ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fetch category by ID
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    return new Response(JSON.stringify({ error: "Category not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(category), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
