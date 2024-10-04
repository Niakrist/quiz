import React from "react";
import { Button } from "../../components/Button";
import resultSrc from "../../assets/images/result.png";
import { useQuiz } from "../../hooks/useQuiz";
import { useKeyPress } from "../../hooks/useKeyPress";
import { getEndWordSuccess, getEndWordFail } from "../../utils/getEndWord";
import { WELCOME_PAGE } from "../../constants";
import { countries } from "../../data/quizQuestions.json";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  const {
    handleChangePage,
    setCheck,
    handleCount,
    score,
    setScore,
    setIsCheckAnswer,
    setNewCountries,
  } = useQuiz();

  const generateResult = () => {
    if (score.trueScore === 0) {
      return (
        <p className={styles.text}>
          Ты не ответил ни на один вопрос. Попробуй еще!
        </p>
      );
    }
    if (score.trueScore === score.answerCount - 1) {
      return (
        <p className={styles.text}>
          Ты ответил правильно на все вопросы. Так держать!
        </p>
      );
    }
    return (
      <p className={styles.text}>
        Ты ответил правильно <br />
        на <span className={styles.success}>{score.trueScore}</span>
        {getEndWordSuccess(score.trueScore)}
        и сделал <span className={styles.error}>{score.falseScore}</span>{" "}
        {getEndWordFail(score.falseScore)}.
      </p>
    );
  };

  const handleClick = () => {
    setCheck("");
    handleCount(18);
    handleChangePage(WELCOME_PAGE);
    setScore({
      trueScore: 0,
      falseScore: 0,
      answerCount: 1,
    });
    setIsCheckAnswer(false);
    setNewCountries(countries);
  };

  useKeyPress({ disabled: false }, handleClick);

  return (
    <>
      <img className={styles.img} src={resultSrc} alt="Иконка результат" />
      <h1 className={styles.title}>Результат</h1>
      {generateResult()}
      <Button disabled={false} onClick={handleClick}>
        Попробовать еще
      </Button>
    </>
  );
};

export default ResultPage;
