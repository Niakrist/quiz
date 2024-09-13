import React from "react";
import { RESULT_PAGE } from "../../constans";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./Main.module.css";

const Main = ({ children }) => {
  const { page } = useQuiz();
  return (
    <main
      className={`${styles.wrapper} ${
        page === RESULT_PAGE && styles.wrapperResult
      }`}>
      {children}
    </main>
  );
};

export default Main;
