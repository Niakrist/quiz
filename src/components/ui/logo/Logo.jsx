import React from "react";
import logoSrc from "../../../assets/img/logo.svg";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="#">
      <img src={logoSrc} alt="Логотип игры Quiz по странам и столицам " />
    </a>
  );
};

export default Logo;
