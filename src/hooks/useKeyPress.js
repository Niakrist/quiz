import { useEffect } from "react";
import { useQuiz } from "@/hooks";

// Хук для управления с клавиатуры
const useKeyPress = ({ disabled }, handleClick, currentQuestion) => {
  const { isCheckAnswer, setCheck, timerIdRef, isPreload, setIsPreload } =
    useQuiz();

  const handleKey = ({ keyCode }) => {
    if (!disabled) {
      if (keyCode === 13) {
        handleClick();
      }
      if (keyCode === 8) {
        clearTimeout(timerIdRef.current);
        setIsPreload(false);
      }
    }

    if ((keyCode === 49 || keyCode === 97) && !isCheckAnswer && !isPreload) {
      setCheck(currentQuestion?.answers[0]);
    }
    if ((keyCode === 50 || keyCode === 98) && !isCheckAnswer && !isPreload) {
      setCheck(currentQuestion?.answers[1]);
    }
    if ((keyCode === 51 || keyCode === 99) && !isCheckAnswer && !isPreload) {
      setCheck(currentQuestion?.answers[2]);
    }
    if ((keyCode === 52 || keyCode === 100) && !isCheckAnswer && !isPreload) {
      setCheck(currentQuestion?.answers[3]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [
    disabled,
    isCheckAnswer,
    currentQuestion,
    setCheck,
    timerIdRef,
    isPreload,
    setIsPreload,
  ]);
};

export default useKeyPress;
