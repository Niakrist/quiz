import React from "react";
import { Button } from "../ui/button";
import { Counter } from "../ui/counter";
import s from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Добро пожаловать</h2>
        <p className={s.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter />
      <Button disabled={false}>Начать</Button>
    </>
  );
};

export default Home;
