"use client";
import { useParams } from "next/navigation";

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="flex flex-col items-center justify-center gap-4 p-2">
      <h1 className="text-2xl font-bold">Quiz {id}</h1>
    </section>
  );
}
