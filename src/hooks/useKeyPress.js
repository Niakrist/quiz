import { useEffect } from "react";
import { useQuiz } from "./useQuiz";

// Хук для нажатия кнопки Enter
export const useKeyPress = ({ disabled }, handleClick) => {
  const { isCheckAnswer } = useQuiz();

  const handleKey = ({ keyCode }) => {
    if (keyCode === 13) {
      handleClick();
    }
  };

  useEffect(() => {
    if (!disabled) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [disabled, isCheckAnswer]);
};
