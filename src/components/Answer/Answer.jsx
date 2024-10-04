import React from "react";
import { RadioButton } from "../RadioButton";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./Answer.module.css";
import { useState } from "react";

const Answer = ({ curentQuest }) => {
  const { check, setCheck, isCheckAnswer } = useQuiz();

  // const checkedAnswer = () => {
  //   if (isCheckAnswer) {
  //     if (check === curentQuest.correctAnswer) {
  //       console.log("+++");
  //       return styles.answerSuccess;
  //     }
  //     if (check && check !== curentQuest.correctAnswer) {
  //       console.log("check ", check);
  //       console.log("correctAnswer ", curentQuest.correctAnswer);
  //     }
  //   }
  // };
  // checkedAnswer();
  return (
    <ul className={styles.flagList}>
      {curentQuest.answers.map((answer, index) => (
        <RadioButton
          key={answer}
          answer={answer}
          index={index}
          check={check}
          setCheck={setCheck}
          correctAnswer={curentQuest.correctAnswer}
        />
      ))}
    </ul>
  );
};

export default Answer;
