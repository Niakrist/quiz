import React from "react";

import styles from "./ResultPage.module.css";
import resultSrc from "../../assets/images/result.png";
import { Button } from "../../components/Button";

const ResultPage = () => {
  // Массив с текстами для вариантов экрана Results & True / Not true, Results & True, Results & Not true
  const results = [
    <p className={styles.text}>
      Ты ответил правильно <br />
      на <span className={styles.success}>12</span> вопросов и сделал{" "}
      <span className={styles.error}>6</span> ошибок.
    </p>,
    <p className={styles.text}>
      Ты ответил правильно на все вопросы. Так держать!
    </p>,
    <p className={styles.text}>
      Ты не ответил ни на один вопрос. Попробуй еще!
    </p>,
  ];
  return (
    <>
      <img className={styles.img} src={resultSrc} alt="Иконка результат" />
      <h1 className={styles.title}>Результат</h1>
      {results[0]}
      <Button disabled={false}>Попробовать еще</Button>
    </>
  );
};

export default ResultPage;
