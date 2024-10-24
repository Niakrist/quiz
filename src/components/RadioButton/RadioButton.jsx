import { useQuiz } from "@/hooks";
import { getAnswerClass, clsx } from "@/utils";
import styles from "./RadioButton.module.css";

const RadioButton = ({ answer, index, correctAnswer }) => {
  const { isCheckAnswer, check, setCheck, isPreload } = useQuiz();

  const handleClick = (answer) => {
    setCheck(answer);
  };

  return (
    <>
      <label
        className={clsx(
          styles.answer,
          getAnswerClass(styles, isCheckAnswer, check, correctAnswer, answer),
          isPreload && styles.afterCheck
        )}
        htmlFor={answer}>
        <span className={styles.num}>{index + 1}</span>
        {answer}
      </label>
      <input
        className={styles.hideCircle}
        type="radio"
        name="flag"
        id={answer}
        check={check}
        onClick={() => handleClick(answer)}
        disabled={isCheckAnswer}
      />
    </>
  );
};

export default RadioButton;
