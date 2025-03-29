"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

interface Quiz {
  id: number;
  question: string;
  answers: string;
  questions: Question[];
  category: string;
  options: string;
}
interface Question {
  id: number;
  text: string;
  quizId: number;
}

const prisma = new PrismaClient();

export async function getQuizzes() {
  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });
  return new Response(JSON.stringify(quizzes), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export default function Home() {
  // const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchQuizzes = async () => {
  //     try {
  //       const res = await getQuizzes(); // Assuming this is your API route
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch quizzes");
  //       }
  //       const data = await res.json();
  //       setQuizzes(data); // Set the quizzes data
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchQuizzes();
  // }, []);

  // if (loading) {
  //   return <div>Loading quizzes...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Quizzes</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link
              href={`/quiz/${quiz.id}`}
              className="text-xl font-medium hover:underline"
            >
              {quiz.question}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
