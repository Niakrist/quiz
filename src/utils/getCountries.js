import { getShuffleArray } from "./getShuffleArray";

// Функция перемешивает массив со странами и в случае правильного ответа удаляет страну из массива стран
export const getCountries = (setNewCountries, curentQuest, check) => {
  setNewCountries((prevCountries) => getShuffleArray(prevCountries));

  if (curentQuest?.correctAnswer === check) {
    console.log("+++");
    setNewCountries((prevCountries) =>
      getShuffleArray(prevCountries).filter(
        (country) => country !== curentQuest?.correctAnswer
      )
    );
  }
};
