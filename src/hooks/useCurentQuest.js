import { useEffect, useState } from "react";
import { useQuiz } from "@/hooks";
import { getShuffleArray } from "@/utils";

// Хук для получния нового вопроса
const useCurentQuest = (questionsList) => {
  const { newCountries, setNewCountries } = useQuiz();
  const [currentQuestion, setCurrentQuest] = useState();

  const getQuestion = () => {
    setCurrentQuest({
      ...questionsList[0],
      answers: getShuffleArray([
        questionsList[0]?.correctAnswer,
        ...newCountries
          .filter((c) => c !== questionsList[0]?.correctAnswer)
          .slice(0, 3),
      ]),
    });
  };

  const getCountries = () => {
    setNewCountries(getShuffleArray(newCountries));
  };

  useEffect(() => {
    getQuestion();
  }, [questionsList]);

  useEffect(() => {
    getCountries();
  }, [currentQuestion]);

  return currentQuestion;
};

export default useCurentQuest;
