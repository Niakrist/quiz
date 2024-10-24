import { getShuffleArray } from "@/utils";

const getCountries = (setNewCountries, currentQuestion) => {
  // Перемешивает массив со странами
  setNewCountries((prevCountries) => getShuffleArray(prevCountries));

  //  В случае ПРАВИЛЬНОГО и НЕПРАВИЛЬНОГО ответа удаляет загаданную страну из массива стран
  setNewCountries((prevCountries) =>
    getShuffleArray(prevCountries).filter(
      (country) => country !== currentQuestion?.correctAnswer
    )
  );

  // В случае ПРАВИЛЬНОГО ответа удаляет загаданную страну из массива стран

  // if (currentQuestion?.correctAnswer === check) {
  //   setNewCountries((prevCountries) =>
  //     getShuffleArray(prevCountries).filter(
  //       (country) => country !== currentQuestion?.correctAnswer
  //     )
  //   );
  // }
};

export default getCountries;
