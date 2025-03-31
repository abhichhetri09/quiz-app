"use client";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAllCategory } from "../src/components/utils";

export default async function Home() {
  const categories = await getAllCategory();

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
    <section
      className="p-2"
      style={{
        background:
          "linear-gradient(90deg, rgba(9,9,44,1) 0%, rgba(35,44,75,1) 35%, rgba(28,55,61,1) 100%);",
      }}
    >
      <div className="grid grid-row items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div
          className="flex items-center justify-between p-4 rounded-md shadow-md "
          style={{
            background:
              "linear-gradient(90deg, rgba(9,9,44,1) 3%, rgba(4,62,99,1) 49%, rgba(28,55,61,1) 100%)",
          }}
        >
          <h1 className="text-2xl font-semibold text-center">
            Select Quiz Categories
          </h1>
        </div>
        <div className="flex items-center justify-center mb-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={
                      categoryImagesMapped.find(
                        (img) => img.name === category.name
                      )?.image || "/fallback-image.png"
                    }
                    alt={category.name}
                    className="rounded-lg w-80 h-60 object-cover "
                  />
                  <h2 className="text mt-2">{category.name}</h2>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
