import { useState } from "react";

// Хук для количества вопросов
export const useCountHook = () => {
  const [count, setCount] = useState(5);

  const handleCount = (num) => {
    if (num === "") {
      setCount(num);
    }
    const regEx = /^[0-9\b]+$/;
    if (regEx.test(num)) {
      setCount(num);
      if (num > 30) {
        setCount(30);
      }
      if (num < 1) {
        setCount(1);
      }
    }
  };
  return { count, handleCount };
};
