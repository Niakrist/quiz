import React, { useState } from "react";
import { RESULT_PAGE, WELCOME_PAGE } from "../../constants";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useQuiz } from "../../hooks/useQuiz";
import { Answer } from "../Answer";
import { Button } from "../Button";
import { Question } from "../Question";
import styles from "./Card.module.css";
import { useEffect } from "react";
import { getShuffleArray } from "../../utils/getShuffleArray.js";
import { useCountries } from "../../hooks/useCountries";
import { useQuestion } from "../../hooks/useQuestion";
const mok = [
  {
    answers: ["Сан-Марино", "Афганистан", "Россия", "Кабо-Верде"],
    correctAnswer: "Кабо-Верде",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
    question: "Флаг какой страны изображен?",
  },
];

const Card = () => {
  const {
    questionsList,
    setQuestionsList,
    handleChangePage,
    count,
    handleCount,
    check,
    setCheck,
    score,
    setScore,
  } = useQuiz();

  const [curentQuest, setCurrentQuest] = useState();
  // const [newCountries, setNewCountries] = useState(() =>
  //   getShuffleArray(countries)
  // );

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

  // const getCountries = () => {
  //   setNewCountries(
  //     getShuffleArray(newCountries).filter(
  //       (country) => country !== curentQuest?.correctAnswer
  //     )
  //   );
  // };

  useEffect(() => {
    getQuestion();
  }, [questionsList]);

  // useEffect(() => {
  //   getCountries();
  // }, [curentQuest]);

  // const curentQuest = useQuestion(questionsList, newCountries);
  const newCountries = useCountries(curentQuest);

  const saveAnswer = () => {
    if (check === curentQuest.correctAnswer) {
      setScore({
        ...score,
        trueScore: ++score.trueScore,
        answerCount: ++score.answerCount,
      });
    } else {
      setScore({
        ...score,
        falseScore: ++score.falseScore,
        answerCount: ++score.answerCount,
      });
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
  };

  const handleClick = () => {
    if (questionsList.length > 1) {
      setQuestionsList(questionsList.slice(1));
      setCheck("");
      saveAnswer();
    } else {
      saveAnswer();
      handleChangePage(RESULT_PAGE);
    }
  };

  useKeyPress({ disabled: !check }, handleClick);

  if (!curentQuest?.correctAnswer) return;

  return (
    <>
      <div className={styles.question}>
        <Question listQuestions={curentQuest} />
        <button className={styles.closeBtn} onClick={backWelcome}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="19.65"
              cy="19.6502"
              r="15.15"
              stroke="#F1F1EF"
              strokeWidth="3"
            />
            <path
              d="M24.7768 16.0626C25.2023 15.6371 25.2023 14.9461 24.7768 14.5205C24.3513 14.095 23.6603 14.095 23.2348 14.5205L19.6503 18.1085L16.0624 14.524C15.6368 14.0984 14.9458 14.0984 14.5203 14.524C14.0948 14.9495 14.0948 15.6405 14.5203 16.066L18.1082 19.6505L14.5237 23.2384C14.0982 23.6639 14.0982 24.355 14.5237 24.7805C14.9492 25.206 15.6402 25.206 16.0658 24.7805L19.6503 21.1926L23.2382 24.7771C23.6637 25.2026 24.3547 25.2026 24.7802 24.7771C25.2057 24.3515 25.2057 23.6605 24.7802 23.235L21.1923 19.6505L24.7768 16.0626Z"
              fill="#F1F1EF"
              stroke="#F1F1EF"
            />
          </svg>
        </button>
      </div>
      <Answer question={curentQuest} score={score} setScore={setScore} />

      <div className={styles.wrapper}>
        <Button disabled={!check} onClick={handleClick}>
          Ответить
        </Button>
        <span className={styles.score}>
          {score.answerCount} / {count}
        </span>
      </div>
    </>
  );
};

export default Card;
