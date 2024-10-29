import { useEffect } from "react";
import { useQuiz } from "@/hooks";

// Хук для управления с клавиатуры
const useKeyPress = ({ disabled }, handleClick, currentQuestion) => {
  const { isCheckAnswer, setCheck, isPreload } = useQuiz();

  const handleKey = ({ keyCode }) => {
    if (!disabled) {
      if (keyCode === 13) {
        handleClick();
      }
    }

    if (!isCheckAnswer && !isPreload) {
      switch (keyCode) {
        case 8:
          setCheck("");
          break;
        case 49:
        case 97:
          setCheck(currentQuestion?.answers[0]);
          break;
        case 50:
        case 98:
          setCheck(currentQuestion?.answers[1]);
          break;
        case 51:
        case 99:
          setCheck(currentQuestion?.answers[2]);
          break;
        case 52:
        case 100:
          setCheck(currentQuestion?.answers[3]);
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", handleKey);

    return () => {
      window.removeEventListener("keyup", handleKey);
    };
  }, [disabled, isCheckAnswer, currentQuestion, setCheck, isPreload]);
};

export default useKeyPress;
