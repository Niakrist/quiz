import { RadioButton } from "@/components";
import styles from "./Answer.module.css";

const Answer = ({ currentQuestion }) => {
  return (
    <ul className={styles.flagList}>
      {currentQuestion.answers.map((answer, index) => (
        <li key={answer} className={styles.flagItem}>
          <RadioButton
            answer={answer}
            index={index}
            correctAnswer={currentQuestion.correctAnswer}
          />
        </li>
      ))}
    </ul>
  );
};

export default Answer;
