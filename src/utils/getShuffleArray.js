// Функция для перемешивания массива
const getShuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default getShuffleArray;
