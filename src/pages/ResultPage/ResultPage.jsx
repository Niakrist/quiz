import { Button } from "@/components";
import { useQuiz, useKeyPress } from "@/hooks";
import { getEndWordSuccess, getEndWordFail } from "@/utils";
import resultSrc from "@/assets/images/result.png";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  const { score, backWelcome } = useQuiz();

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

  useKeyPress({ disabled: false }, backWelcome);

  return (
    <>
      <img className={styles.img} src={resultSrc} alt="Иконка результат" />
      <h1 className={styles.title}>Результат</h1>
      {generateResult()}
      <Button disabled={false} onClick={backWelcome}>
        Попробовать еще
      </Button>
    </>
  );
};

export default ResultPage;
