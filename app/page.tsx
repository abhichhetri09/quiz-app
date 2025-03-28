"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(`/quiz/${id}`, {
      scroll: false,
    });
  };
  const quizes = [
    {
      id: 1,
      title: "Quiz 1",
    },
    {
      id: 2,
      title: "Quiz 2",
    },
    {
      id: 3,
      title: "Quiz 3",
    },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All quizes</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizes.map((quiz) => (
          <Link href={`/quiz/${quiz.id}`} key={quiz.id}>
            {quiz.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
