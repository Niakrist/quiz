import { IconSvg } from "@/components";
import { useQuiz } from "@/hooks";
import styles from "./Counter.module.css";

const Counter = ({ isLoadingQuiz }) => {
  const { count, handleCount } = useQuiz();

  return (
    <>
      <p className={styles.text}>Выбери количество вопросов:</p>
      <div className={styles.counterQuestion}>
        <button
          className={styles.buttonCount}
          disabled={count <= 1 || isLoadingQuiz}
          onClick={() => handleCount(Number(count - 1))}>
          <IconSvg id="plus-svg" />
        </button>
        <input
          className={styles.quantityQuestion}
          type="text"
          value={count}
          onChange={(e) => handleCount(e.target.value)}
          disabled={isLoadingQuiz}
        />
        <button
          className={styles.buttonCount}
          disabled={count >= 30 || isLoadingQuiz}
          onClick={() => handleCount(Number(count) + 1)}>
          <IconSvg id="minus-svg" />
        </button>
      </div>
    </>
  );
};

export default Counter;
