import Image from "next/image";

import Link from "next/link";
import { getAllCategory, getCategoryImage } from "../src/components/utils";

export default async function Home() {
  const categories = await getAllCategory();
  const categoryImages = getCategoryImage;

  return (
    <section
      className="p-2"
      style={{
        background:
          "linear-gradient(90deg, rgba(9,9,44,1) 0%, rgba(35,44,75,1) 35%, rgba(28,55,61,1) 100%)",
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
                    src={categoryImages(category.name)}
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
