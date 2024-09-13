import React from "react";
import { WELCOME_PAGE } from "../../constans";
import { useQuiz } from "../../hooks/useQuiz";
import { Answer } from "../Answer";
import { Button } from "../Button";
import Question from "../Question/Question";
import styles from "./Card.module.css";

const Card = () => {
  const { questionsList, handleChangePage, count, check, setCheck } = useQuiz();
  const handleClick = () => {
    handleChangePage(WELCOME_PAGE);
    setCheck("");
  };

  console.log(questionsList);

  return (
    <>
      <div className={styles.question}>
        {/* Компонент в себя принимает только первый вопрос  */}
        <Question listQuestions={questionsList[0]} />
        <button className={styles.closeBtn} onClick={handleClick}>
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
      {/* Компонент в себя принимает 4-е варианта ответа только для первого вопроса  */}
      <Answer question={questionsList[0]} />
      <div className={styles.wrapper}>
        <Button disabled={!check}>Ответить</Button>
        <span className={styles.score}>1 / {count}</span>
      </div>
    </>
  );
};

export default Card;
