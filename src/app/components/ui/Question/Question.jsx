import React from "react";
import styles from "./Question.module.css";

const Question = ({ listQuestion }) => {
  return (
    <>
      <img
        className={styles.img}
        src={listQuestion.flag}
        alt="Загаданный флаг страны"
      />
      <h2 className={styles.title}>Флаг какой страны изображен?</h2>
    </>
  );
};

export default Question;
