import React from "react";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  const { count } = useQuiz();
  return (
    <section>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter />
      <Button disabled={!count}>Начать</Button>
    </section>
  );
};

export default WelcomePage;
