import { useEffect, useState } from "react";
import { getShuffleArray } from "../utils/getShuffleArray";
import { countries } from "../data/quizQuestions.json";

export const useQuestion = (questionsList) => {
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

  useEffect(() => {
    getQuestion();
  }, [questionsList]);

  return curentQuest;
};
