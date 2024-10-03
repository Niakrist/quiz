import React from "react";
import styles from "./RadioButton.module.css";

const RadioButton = ({ answer, index, check, setCheck }) => {
  return (
    <li className={styles.flagItem}>
      <label
        className={
          styles.answer + " " + (check === answer ? styles.answerChange : "")
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
      />
    </li>
  );
};

export default RadioButton;
