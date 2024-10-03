import { useEffect, useState } from "react";
import { countries } from "../data/quizQuestions.json";
import { getShuffleArray } from "../utils/getShuffleArray.js";

export const useCountries = (curentQuest) => {
  const [newCountries, setNewCountries] = useState(() =>
    getShuffleArray(countries)
  );

  const getCountries = () => {
    setNewCountries(
      getShuffleArray(newCountries).filter(
        (country) => country !== curentQuest?.correctAnswer
      )
    );
  };

  useEffect(() => {
    getCountries();
  }, [curentQuest]);
  return newCountries;
};
