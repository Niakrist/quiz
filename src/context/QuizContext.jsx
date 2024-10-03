import React, { useState } from "react";
import { createContext } from "react";
import { useChangePage } from "../hooks/useChangePage";
import { useCountHook } from "../hooks/useCountHook";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const { count, handleCount } = useCountHook();
  const { page, handleChangePage } = useChangePage();
  const [questionsList, setQuestionsList] = useState();
  const [check, setCheck] = useState("");
  const [score, setScore] = useState({
    trueScore: 0,
    falseScore: 0,
    answerCount: 1,
  });

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
      }}>
      {children}
    </QuizContext.Provider>
  );
};
