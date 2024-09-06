import { RadioButton } from "@/components/ui/RadioButton";
import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import styles from "./Answer.module.css";

const Answer = ({ listQuestions, isCheck, setIsChek }) => {
  const [answers] = useState(() => {
    return [...listQuestions.answers].sort(() => Math.random() - 0.5);
  });

  return (
    <ul className={styles.flagList}>
      {answers.map((answer, index) => (
        <RadioButton
          key={answer}
          answer={answer}
          isCheck={isCheck}
          setIsChek={setIsChek}
          index={index}
        />
      ))}
    </ul>
  );
};

export default Answer;
