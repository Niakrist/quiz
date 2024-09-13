// Функция для перемешивания массива
export const getShuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
