"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getCategoryImage } from "../../../src/components/utils";
import { Category } from "../../../types";

export default function CategoryPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const params = useParams();
  const categoryId = params.id;

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`/api/category/${categoryId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch category data");
        }
        const data = await response.json();
        setCategory(data); // ✅ Store data in state
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    if (categoryId) {
      getCategory(); // ✅ Fetch data when categoryId is available
    }
  }, [categoryId]); // ✅ Runs when categoryId changes

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">All Quizzes</h1>
      <p>Category ID: {categoryId}</p>

      {category ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">{category.name}</h2>
          <Image
            src={getCategoryImage(category.name)}
            alt={category.name}
            className="rounded-lg"
          />
        </div>
      ) : (
        <p>Loading category data...</p>
      )}
    </div>
  );
}
