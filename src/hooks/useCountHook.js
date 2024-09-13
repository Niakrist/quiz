import { useState } from "react";

export const useCountHook = () => {
  const [count, setCount] = useState(18);

  const handleCount = (num) => {
    setCount(num);
    if (num === "") return;
    setCount(num);
    if (num > 30) {
      setCount(30);
    }
    if (num < 1) {
      setCount(1);
    }
  };
  return { count, handleCount };
};
