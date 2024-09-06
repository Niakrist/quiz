import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import resultSrc from "@/assets/img/result.png";
import styles from "./Result.module.css";

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
  <p className={styles.text}>Ты не ответил ни на один вопрос. Попробуй еще!</p>,
];

const Result = ({ onClick }) => {
  const handleGoWelcome = () => {
    onClick("welcome");
  };

  return (
    <Container cl={styles.cl}>
      <img className={styles.img} src={resultSrc} alt="Иконка результат" />
      <h1 className={styles.title}>Результат</h1>
      {results[0]}
      <Button onClick={handleGoWelcome} disabled={false}>
        Попробовать еще
      </Button>
    </Container>
  );
};

export default Result;
