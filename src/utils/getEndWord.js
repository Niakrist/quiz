// Функциz для корректных окончаний на странице с результатами
export const getEndWord = (num, isSuccess) => {
  if (num >= 5) return isSuccess ? " вопросов " : " ошибок";
  const lastNum = Number(String(num).slice(-1));
  if ([2, 3, 4].includes(lastNum)) return isSuccess ? " вопроса " : " ошибки";
  return isSuccess ? " вопрос " : " ошибку";
};
