import React, { useEffect } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { getQuestions } from "../../utils/getQuestions";
import { QUEST_PAGE, RESULT_PAGE, WELCOME_PAGE } from "../../constans";

import styles from "./Button.module.css";

const Button = ({ disabled, children }) => {
  const {
    count,
    page,
    handleChangePage,
    setQuestionsList,
    setCheck,
    handleCount,
  } = useQuiz();

  const handleClick = () => {
    if (page === WELCOME_PAGE) {
      setQuestionsList(getQuestions(count));
      handleChangePage(QUEST_PAGE);
    }
    if (page === QUEST_PAGE) {
      handleChangePage(RESULT_PAGE);
    }
    if (page === RESULT_PAGE) {
      setCheck("");
      handleCount(18);
      handleChangePage(WELCOME_PAGE);
    }
  };

  const handleKey = ({ keyCode }) => {
    if (keyCode === 13 && count) {
      handleClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [count]);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={styles.button}>
        {children}
      </button>
      <p className={count ? styles.text : styles.textDisabled}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};

export default Button;
