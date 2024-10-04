// Функция для получения класса с цветом для выбранного, правильного и не правильного ответа
export const getAnswerClass = (
  styles,
  isCheckAnswer,
  check,
  correctAnswer,
  answer
) => {
  if (isCheckAnswer) {
    if (answer === correctAnswer && check === correctAnswer) {
      return styles.answerSuccess;
    }
    if (answer === correctAnswer && check !== correctAnswer) {
      return styles.answerSuccess;
    }
    if (check === answer && answer !== correctAnswer) {
      return styles.answerError;
    }
  } else {
    return check === answer ? styles.answerChoose : "";
  }
};
