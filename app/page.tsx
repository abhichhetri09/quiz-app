"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Quiz {
  id: number;
  title: string;
}

export default function Home() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch("/api/quizzes"); // Assuming this is your API route
        if (!res.ok) {
          throw new Error("Failed to fetch quizzes");
        }
        const data = await res.json();
        setQuizzes(data); // Set the quizzes data
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) {
    return <div>Loading quizzes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Quizzes</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link
              href={`/quiz/${quiz.id}`}
              className="text-xl font-medium hover:underline"
            >
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
