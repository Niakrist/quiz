import React from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { getAnswerClass } from "../../utils/getAnswerClass";
import styles from "./RadioButton.module.css";

const RadioButton = ({ answer, index, check, setCheck, correctAnswer }) => {
  const { isCheckAnswer } = useQuiz();

  return (
    <li className={styles.flagItem}>
      <label
        className={
          styles.answer +
          " " +
          getAnswerClass(styles, isCheckAnswer, check, correctAnswer, answer)
        }
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
        onClick={() => setCheck(answer)}
        disabled={isCheckAnswer}
      />
    </li>
  );
};

export default RadioButton;
