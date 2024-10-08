import React from "react";
import logoSrc from "../../assets/images/logo.svg";
import { useQuiz } from "../../hooks/useQuiz";
import { WELCOME_PAGE } from "../../constants";
import styles from "./Logo.module.css";

const Logo = () => {
  const { handleChangePage, setCheck, handleCount } = useQuiz();
  const handleClick = (e) => {
    e.preventDefault();
    setCheck("");
    handleChangePage(WELCOME_PAGE);
    handleCount(18);
  };
  return (
    <a className={styles.logoLink} href="#" onClick={handleClick}>
      <img src={logoSrc} alt="Логотип игры Quiz по странам и столицам " />
    </a>
  );
};

export default Logo;
