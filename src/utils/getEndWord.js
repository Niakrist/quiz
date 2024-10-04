// Функции для корректных окончаний на странице с результатами

export const getEndWordSuccess = (num) => {
  if (num >= 5) return " вопросов ";
  const lastNum = Number(String(num).slice(-1));
  if ([2, 3, 4].includes(lastNum)) return " вопроса ";
  return " вопрос ";
};

export const getEndWordFail = (num) => {
  if (num >= 5) return " ошибок";
  const lastNum = Number(String(num).slice(-1));
  if ([2, 3, 4].includes(lastNum)) return " ошибки";
  return " ошибку";
};
