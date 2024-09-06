import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

import styles from "./Welcome.module.css";

const Welcome = ({ onClick }) => {
  const handleGoQuestion = () => {
    onClick("question");
  };

  return (
    <Container img={styles.card}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter />
      <Button onClick={handleGoQuestion} disabled={false}>
        Начать
      </Button>
    </Container>
  );
};

export default Welcome;
