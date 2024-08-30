import React from "react";
import { Home } from "../../home";
import s from "./Container.module.css";
const Container = ({ children }) => {
  return <section className={s.card}>{children}</section>;
};

export default Container;
