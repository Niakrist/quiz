import styles from "./Button.module.css";

const Button = ({ disabled, children, onClick }) => {
  console.log("+++");
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
