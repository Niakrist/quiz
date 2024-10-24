// Функция для получения класса с цветом для выбранного, правильного и не правильного ответа
import { clsx } from "@/utils";

const getAnswerClass = (
  styles,
  isCheckAnswer,
  check,
  correctAnswer,
  answer
) => {
  if (isCheckAnswer) {
    if (answer === correctAnswer) {
      return clsx(styles.answerSuccess, styles.afterCheck);
    }
    if (check === answer && answer !== correctAnswer) {
      return clsx(styles.answerError, styles.afterCheck);
    }
    return styles.afterCheck;
  } else {
    return check === answer ? styles.answerChoose : "";
  }
};

export default getAnswerClass;
