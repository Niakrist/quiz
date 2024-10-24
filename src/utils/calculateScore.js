// Функция для подсчета результатов
const calculateScore = (check, score, setScore, currentQuestion) => {
  if (check === currentQuestion.correctAnswer) {
    setScore({
      ...score,
      trueScore: ++score.trueScore,
      answerCount: ++score.answerCount,
    });
  } else {
    setScore({
      ...score,
      falseScore: ++score.falseScore,
      answerCount: ++score.answerCount,
    });
  }
};

export default calculateScore;
