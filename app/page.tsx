"use client";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
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

const prisma = new PrismaClient();

export default async function Home() {
  const quizzes = await prisma.quiz.findMany({
    select: {
      id: true,
      categoryId: true,
    },
  });

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

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

  return (
    <section className=" p-2">
      <div className="grid grid-row">
        <h1 className="text-2xl font-semibold">All Quizzes</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const categoryQuizzes = quizzes.filter(
              (quiz) => quiz.categoryId === category.id
            );

            return (
              <li key={category.id} className="flex flex-col items-center">
                <Image
                  src={
                    categoryImagesMapped.find(
                      (img) => img.name === category.name
                    )?.image || "/fallback-image.png"
                  }
                  alt={category.name}
                  className="rounded-lg w-80 h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
                {categoryQuizzes.length > 0 && (
                  <ul className="mt-2">
                    {categoryQuizzes.map((quiz) => (
                      <li key={quiz.id}>
                        <Link
                          href={`/quiz/${quiz.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          Quiz #{quiz.id}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
