// Функция для подсчета результатов
export const calculateScore = (check, score, setScore, curentQuest) => {
  if (check === curentQuest.correctAnswer) {
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
