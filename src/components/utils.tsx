import { PrismaClient } from "@prisma/client";
import {
  art,
  astronomy,
  chemistry,
  currency,
  food,
  geography,
  gk,
  literature,
  math,
  medicines,
  movies,
  physics,
  music,
  science,
  history,
  sports,
  tech,
  zoolozy,
} from "@/public/images/index";
const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

const categoryImages = {
  art,
  astronomy,
  chemistry,
  currency,
  food,
  geography,
  gk,
  literature,
  math,
  medicines,
  movies,
  physics,
  music,
  science,
  history,
  sports,
  tech,
  zoolozy,
};

const categoryImagesMapped = [
  { id: 1, name: "Art", image: categoryImages.art },
  { id: 2, name: "Astronomy", image: categoryImages.astronomy },
  { id: 3, name: "Chemistry", image: categoryImages.chemistry },
  { id: 4, name: "Currency", image: categoryImages.currency },
  { id: 5, name: "Food", image: categoryImages.food },
  { id: 6, name: "Geography", image: categoryImages.geography },
  { id: 7, name: "General Knowledge", image: categoryImages.gk },
  { id: 8, name: "Literature", image: categoryImages.literature },
  { id: 9, name: "Math", image: categoryImages.math },
  { id: 10, name: "Medicines", image: categoryImages.medicines },
  { id: 11, name: "Movies", image: categoryImages.movies },
  { id: 12, name: "Physics", image: categoryImages.physics },
  { id: 13, name: "Music", image: categoryImages.music },
  { id: 14, name: "Science", image: categoryImages.science },
  { id: 15, name: "History", image: categoryImages.history },
  { id: 16, name: "Sports", image: categoryImages.sports },
  { id: 17, name: "Technology", image: categoryImages.tech },
  { id: 18, name: "Zoology", image: categoryImages.zoolozy },
];

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function getAllCategory() {
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });

  return categories.map(({ id, name }) => ({ id, name }));
}
function getCategoryImage(categoryName: string) {
  const category = categoryImagesMapped.find(
    (img) => img.name === categoryName
  );
  return category ? category.image : "/fallback-image.png";
}

export { getAllCategory, getCategoryImage };
