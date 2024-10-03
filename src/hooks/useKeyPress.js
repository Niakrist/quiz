import { useEffect } from "react";

export const useKeyPress = ({ disabled }, handleClick) => {
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
  }, [disabled]);
};
