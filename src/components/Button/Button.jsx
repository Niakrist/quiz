import { Preloader } from "@/components";
import { useQuiz } from "@/hooks";
import styles from "./Button.module.css";

const Button = ({ disabled, children, onClick }) => {
  const { isPreload } = useQuiz();

  return (
    <div className={styles.wrapper}>
      <button
        onClick={onClick}
        disabled={isPreload || disabled}
        className={styles.button}>
        {isPreload ? <Preloader /> : children}
      </button>
      <p className={!disabled ? styles.text : styles.textDisabled}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};

export default Button;
