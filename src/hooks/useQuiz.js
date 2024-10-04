import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

// Хук для обращения к контексту
export const useQuiz = () => {
  return useContext(QuizContext);
};
