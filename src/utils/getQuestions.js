import { questions, countries } from "../data/quizQuestions.json";
import { getShuffleArray } from "./getShuffleArray";

export const getQuestions = (count) => {
  // Получаем перемешенный список questions с ответами заданного количества
  const shuffleQuestions = getShuffleArray(questions).splice(0, count);

  const questionsList = [];

  // Перебираем каждый вариант ответа
  for (const item of shuffleQuestions) {
    // Перемешиваем список countries со странами
    const shuffleCountries = getShuffleArray(countries);
    // Убираем из перемешенного списка верный вариант ответа
    const incorrectAnswers = shuffleCountries.filter(
      (countrie) => countrie !== item.correctAnswer
    );
    // Создаем массив с ответами и добавляем в него верный вариант + три случайные страны
    const answerArray = [item.correctAnswer, ...incorrectAnswers.slice(0, 3)];
    // Создаем в объекте item новое поле answers и присваиваем ему перемешенный массив с вариантами ответов
    item.answers = getShuffleArray(answerArray);
    questionsList.push(item);
  }

  return questionsList;
};
