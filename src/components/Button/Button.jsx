import React from "react";
import styles from "./Button.module.css";

const Button = ({ disabled, children, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick} disabled={disabled} className={styles.button}>
        {children}
      </button>
      <p className={!disabled ? styles.text : styles.textDisabled}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};

export default Button;
