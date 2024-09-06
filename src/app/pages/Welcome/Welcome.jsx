import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

import styles from "./Welcome.module.css";

const Welcome = ({ onClick, onCount, count, fillListQuestions }) => {
  const handleGoQuestion = () => {
    onClick("question");
    fillListQuestions();
    console.log("start");
  };

  return (
    <Container img={styles.card}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter onCount={onCount} count={count} />
      <Button onClick={handleGoQuestion} disabled={!count}>
        Начать
      </Button>
    </Container>
  );
};

export default Welcome;
