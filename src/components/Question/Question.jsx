import React from "react";
import styles from "./Question.module.css";
const Question = ({ listQuestions }) => {
  return (
    <>
      <img
        className={styles.img}
        src={listQuestions.flag}
        alt="Загаданный флаг страны"
      />
      <h2 className={styles.title}>{listQuestions.question}</h2>
    </>
  );
};

export default Question;
