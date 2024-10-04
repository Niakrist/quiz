import { useEffect, useState } from "react";
import { getShuffleArray } from "../utils/getShuffleArray.js";
import { useQuiz } from "./useQuiz";

// Хук для получния нового вопроса
export const useCurentQuest = (questionsList) => {
  const { newCountries, setNewCountries } = useQuiz();
  const [curentQuest, setCurrentQuest] = useState();

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

  console.log(newCountries);

  const getCountries = () => {
    setNewCountries(getShuffleArray(newCountries));
  };

  useEffect(() => {
    getQuestion();
  }, [questionsList]);

  useEffect(() => {
    getCountries();
  }, [curentQuest]);

  return curentQuest;
};
