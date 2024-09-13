import { useState } from "react";
import { WELCOME_PAGE } from "../constans";

export const useChangePage = () => {
  const [page, setPage] = useState(WELCOME_PAGE);
  const handleChangePage = (nextPage) => {
    setPage(nextPage);
  };
  return { page, handleChangePage };
};
