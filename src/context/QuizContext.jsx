import { useState, createContext, useRef } from "react";
import { useChangePage, useCountHook } from "@/hooks";
import { getShuffleArray, getCountries, calculateScore } from "@/utils";
import { countries } from "@/data/quizQuestions.json";
import { RESULT_PAGE, WELCOME_PAGE } from "../constants";

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
  const [isPreload, setIsPreload] = useState(false);
  const timerIdRef = useRef(null);

  const giveAnswer = (currentQuestion) => {
    if (questionsList.length > 1) {
      if (isCheckAnswer) {
        setQuestionsList(questionsList.slice(1));
        setCheck("");
        calculateScore(check, score, setScore, currentQuestion);
        setIsCheckAnswer(false);
      } else {
        setIsPreload(true);
        timerIdRef.current = setTimeout(() => {
          setIsPreload((prevIsPreload) => {
            if (prevIsPreload) {
              setIsCheckAnswer(true);
              getCountries(setNewCountries, currentQuestion, check);
              setIsPreload(false);
            }
            return false;
          });
        }, 2000);
      }
    } else {
      if (!isCheckAnswer) {
        setIsPreload(true);
        timerIdRef.current = setTimeout(() => {
          setIsPreload((prevIsPreload) => {
            if (prevIsPreload) {
              setIsCheckAnswer(true);
              setIsPreload(false);
            }
            return false;
          });
        }, 2000);
      } else {
        calculateScore(check, score, setScore, currentQuestion);
        setIsCheckAnswer(false);
        handleChangePage(RESULT_PAGE);
      }
    }
  };

  const backWelcome = () => {
    handleChangePage(WELCOME_PAGE);
    setCheck("");
    setScore({
      trueScore: 0,
      falseScore: 0,
      answerCount: 1,
    });
    handleCount(18);
    setIsCheckAnswer(false);
    setNewCountries(countries);
  };

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
        giveAnswer,
        backWelcome,
        timerIdRef,
        isPreload,
        setIsPreload,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
