import { useEffect } from "react";
import styles from "./Button.module.css";

const Button = ({ disabled, children, onClick, count }) => {
  // По клавише Enter переходим на страницу с вопросами и формируем список с вопросами
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && count) {
        console.log("count: ", count);
        onClick();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [count]);

  return (
    <div className={styles.wrapper}>
      <button disabled={disabled} className={styles.button} onClick={onClick}>
        {children}
      </button>
      <p className={!disabled ? styles.text : styles.textDisabled}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};

export default Button;
