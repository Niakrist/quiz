import { useContext } from "react";
import { QuizContext } from "@/context";

// Хук для обращения к контексту
const useQuiz = () => {
  return useContext(QuizContext);
};

export default useQuiz;
