import { useState } from "react";
import { questions } from "@/data/quizQuestions.json";

// Хук для количества вопросов
const useCount = () => {
  const [count, setCount] = useState(5);

  const handleCount = (num) => {
    if (num === "") {
      setCount(num);
    }
    const regEx = /^(?!0)\d+$/;
    if (regEx.test(num)) {
      setCount(num);
      if (num > questions.length) {
        setCount(questions.length);
      }
      if (num < 1) {
        setCount(1);
      }
    }
  };
  return { count, handleCount };
};

export default useCount;
