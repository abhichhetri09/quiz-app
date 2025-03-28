"use client";
import { Question } from "@prisma/client";
import { useParams } from "next/navigation";

export default function QuizPage() {
  const params = useParams(); // Use useParams to get the quiz ID from the URL
  const id = params?.id; // Safely access 'id' from params
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-2">
      <h1 className="text-2xl font-bold">Quiz {id}</h1>
    </section>
  );
}
