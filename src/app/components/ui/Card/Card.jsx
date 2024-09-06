import { Button } from "@/components/ui/Button";

import flagSrc from "@/assets/img/flag.png";
import styles from "./Card.module.css";
import { useState } from "react";

const quests = [
  { id: "1", name: "Камерун" },
  { id: "2", name: "Нигерия" },
  { id: "3", name: "Центрально-Африканская Республика" },
  { id: "4", name: "Гаити" },
];

const Card = ({ onClick }) => {
  const [isCheck, setIsChek] = useState("");

  const handleGoWelcome = () => {
    onClick("welcome");
  };
  const handleGoResult = () => {
    onClick("result");
  };

  return (
    <>
      <div className={styles.question}>
        <img className={styles.img} src={flagSrc} alt="Флаг" />
        <h2 className={styles.title}>Флаг какой страны изображен?</h2>
        <button onClick={handleGoWelcome} className={styles.closeBtn}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="19.65"
              cy="19.6502"
              r="15.15"
              stroke="#F1F1EF"
              strokeWidth="3"
            />
            <path
              d="M24.7768 16.0626C25.2023 15.6371 25.2023 14.9461 24.7768 14.5205C24.3513 14.095 23.6603 14.095 23.2348 14.5205L19.6503 18.1085L16.0624 14.524C15.6368 14.0984 14.9458 14.0984 14.5203 14.524C14.0948 14.9495 14.0948 15.6405 14.5203 16.066L18.1082 19.6505L14.5237 23.2384C14.0982 23.6639 14.0982 24.355 14.5237 24.7805C14.9492 25.206 15.6402 25.206 16.0658 24.7805L19.6503 21.1926L23.2382 24.7771C23.6637 25.2026 24.3547 25.2026 24.7802 24.7771C25.2057 24.3515 25.2057 23.6605 24.7802 23.235L21.1923 19.6505L24.7768 16.0626Z"
              fill="#F1F1EF"
              stroke="#F1F1EF"
            />
          </svg>
        </button>
      </div>
      <ul className={styles.flagList}>
        {quests.map((quest) => (
          <li key={quest.id} className={styles.flagItem}>
            <label
              className={
                styles.answer +
                " " +
                (isCheck === quest.name ? styles.answerTrue : "")
              }
              htmlFor={quest.id + quest.name}>
              <span className={styles.num}>{quest.id}</span>
              {quest.name}
            </label>
            <input
              className={styles.hideCircle}
              type="radio"
              onChange={() => setIsChek(quest.name)}
              value={isCheck}
              checked={isCheck === quest.name}
              name="flag"
              id={quest.id + quest.name}
            />
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <Button onClick={handleGoResult} disabled={!isCheck}>
          Ответить
        </Button>
        <span className={styles.score}>1 / 18</span>
      </div>
    </>
  );
};

export default Card;
