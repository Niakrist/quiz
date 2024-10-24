const getNameButton = (isCheckAnswer, questionsList) => {
  if (!isCheckAnswer) {
    return "Ответить";
  } else {
    return questionsList.length > 1 ? "Дальше" : "Завершить";
  }
};

export default getNameButton;
