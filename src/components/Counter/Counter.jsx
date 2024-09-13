import React from "react";

import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

import styles from "./Counter.module.css";

const Counter = () => {
  const { count, handleCount } = useContext(QuizContext);

  return (
    <>
      <p className={styles.text}>Выбери количество вопросов:</p>
      <div className={styles.counterQuestion}>
        <button
          className={styles.buttonCount}
          disabled={count === 1}
          onClick={() => handleCount(Number(count - 1))}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="30"
              cy="30"
              r="23"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M39 30.3846C39 31.1505 38.3813 31.7692 37.6154 31.7692H22.3846C21.6187 31.7692 21 31.1505 21 30.3846C21 29.6187 21.6187 29 22.3846 29H37.6154C38.3813 29 39 29.6187 39 30.3846Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
        <input
          className={styles.quantityQuestion}
          type="number"
          value={count}
          onChange={(e) => handleCount(e.target.value)}
        />
        <button
          className={styles.buttonCount}
          disabled={count === 30}
          onClick={() => handleCount(Number(count) + 1)}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="30"
              cy="30"
              r="23"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M31.3846 22.3846C31.3846 21.6187 30.7659 21 30 21C29.2341 21 28.6154 21.6187 28.6154 22.3846V28.6154H22.3846C21.6187 28.6154 21 29.2341 21 30C21 30.7659 21.6187 31.3846 22.3846 31.3846H28.6154V37.6154C28.6154 38.3813 29.2341 39 30 39C30.7659 39 31.3846 38.3813 31.3846 37.6154V31.3846H37.6154C38.3813 31.3846 39 30.7659 39 30C39 29.2341 38.3813 28.6154 37.6154 28.6154H31.3846V22.3846Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Counter;
