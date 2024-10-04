import React from "react";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useQuiz } from "../../hooks/useQuiz";
import { getShuffleArray } from "../../utils/getShuffleArray.js";
import { QUEST_PAGE } from "../../constants";
import { questions } from "../../data/quizQuestions.json";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  const { count, handleChangePage, setQuestionsList } = useQuiz();

  const handleClick = () => {
    setQuestionsList(getShuffleArray(questions).slice(0, count));
    handleChangePage(QUEST_PAGE);
  };

  useKeyPress({ disabled: !count }, handleClick);

  return (
    <section>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter />
      <Button disabled={!count} onClick={handleClick}>
        Начать
      </Button>
    </section>
  );
};

export default WelcomePage;
