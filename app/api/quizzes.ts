import { PrismaClient, Quiz, Question } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface QuizWithQuestions extends Quiz {
  questions: Question[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Add method checking
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Allow CORS for all origins (adjust as needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    // Fetch quizzes along with related questions using Prisma
    const quizzes: QuizWithQuestions[] = await prisma.quiz.findMany({
      include: {
        questions: true, // Include related questions
      },
    });

    // If no quizzes are found, return a 404 error
    if (!quizzes.length) {
      return res.status(404).json({ message: "No quizzes found" });
    }

    // Return quizzes with questions as the response
    return res.status(200).json(quizzes);
  } catch (error) {
    // Log and return error if something goes wrong
    console.error("Error fetching quizzes:", error);
    return res.status(500).json({ error: "Failed to fetch quizzes" });
  }
}
