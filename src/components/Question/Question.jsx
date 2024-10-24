import styles from "./Question.module.css";
const Question = ({ listQuestions }) => {
  return (
    <figure>
      <img
        className={styles.img}
        src={listQuestions.flag}
        alt="Загаданный флаг страны"
      />
      <figcaption>
        <h2 className={styles.title}>{listQuestions.question}</h2>
      </figcaption>
    </figure>
  );
};

export default Question;
