"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function categoryPage() {
  const params = useParams();
  const categoryId = params.id;
  const getCategory = async () => {
    const response = await fetch(`/api/category/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setCategory(data);
    return data;
  };
  const [category, setCategory] = useState(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Quizzes</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <p>Category ID: {categoryId}</p>
      </ul>
    </div>
  );
}
