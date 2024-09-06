import styles from "./RadioButton.module.css";

const RadioButton = ({ answer, isCheck, setIsChek, index }) => {
  return (
    <li className={styles.flagItem}>
      <label
        className={
          styles.answer + " " + (isCheck === answer ? styles.answerTrue : "")
        }
        htmlFor={answer}>
        <span className={styles.num}>{index + 1}</span>
        {answer}
      </label>
      <input
        className={styles.hideCircle}
        type="radio"
        onChange={() => setIsChek(answer)}
        value={isCheck}
        checked={isCheck === answer}
        name="flag"
        id={answer}
      />
    </li>
  );
};

export default RadioButton;
