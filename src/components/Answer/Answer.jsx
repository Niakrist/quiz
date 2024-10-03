import React from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { RadioButton } from "../RadioButton";
import styles from "./Answer.module.css";

const Answer = ({ question }) => {
  const { check, setCheck } = useQuiz();

  return (
    <ul className={styles.flagList}>
      {question.answers.map((answer, index) => (
        <RadioButton
          key={answer}
          answer={answer}
          index={index}
          check={check}
          setCheck={setCheck}
        />
      ))}
    </ul>
  );
};

export default Answer;
