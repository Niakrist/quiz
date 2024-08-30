import React from "react";
import s from "./Button.module.css";

const Button = ({ disabled, children }) => {
  return (
    <div className={s.wrapper}>
      <button disabled={disabled} className={s.button}>
        {children}
      </button>
      <p className={s.text}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};

export default Button;
