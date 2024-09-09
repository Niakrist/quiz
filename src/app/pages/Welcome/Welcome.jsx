import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

import styles from "./Welcome.module.css";

const Welcome = ({ onClick, onCount, count, fillListQuestions }) => {
  // По клику переходим на страницу с вопросами и формируем список с вопросами
  const handleGoQuestion = () => {
    onClick("question");
    fillListQuestions();
  };

  return (
    <Container img={styles.card}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter onCount={onCount} count={count} />
      <Button onClick={handleGoQuestion} disabled={!count} count={count}>
        Начать
      </Button>
    </Container>
  );
};

export default Welcome;
