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

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

interface QuizProps {
  quizzes: Quiz[];
  questions: Question[];
  categories: Category[];
}

export type { Quiz, Question, Category, QuizProps };
