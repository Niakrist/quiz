import React, { useState } from "react";
import { createContext } from "react";
import { useChangePage } from "../hooks/useChangePage";
import { useCountHook } from "../hooks/useCountHook";
import { getShuffleArray } from "../utils/getShuffleArray";
import { countries } from "../data/quizQuestions.json";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const { count, handleCount } = useCountHook();
  const { page, handleChangePage } = useChangePage();
  const [questionsList, setQuestionsList] = useState();
  const [isCheckAnswer, setIsCheckAnswer] = useState(false);
  const [check, setCheck] = useState("");
  const [score, setScore] = useState({
    trueScore: 0,
    falseScore: 0,
    answerCount: 1,
  });
  const [newCountries, setNewCountries] = useState(() =>
    getShuffleArray(countries)
  );
  return (
    <QuizContext.Provider
      value={{
        questionsList,
        count,
        handleCount,
        page,
        handleChangePage,
        setQuestionsList,
        check,
        setCheck,
        score,
        setScore,
        isCheckAnswer,
        setIsCheckAnswer,
        newCountries,
        setNewCountries,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
