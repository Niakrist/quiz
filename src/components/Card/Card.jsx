import { Answer, Button, Question, Icon } from "@/components";
import { useCurentQuest, useQuiz, useKeyPress } from "@/hooks";
import { getNameButton } from "@/utils";
import styles from "./Card.module.css";

const Card = () => {
  const {
    questionsList,
    count,
    check,
    score,
    isCheckAnswer,
    giveAnswer,
    backWelcome,
    isPreload,
  } = useQuiz();

  let currentQuestion = useCurentQuest(questionsList);

  const handleClick = () => {
    giveAnswer(currentQuestion);
  };

  useKeyPress({ disabled: !check }, handleClick, currentQuestion);

  if (!currentQuestion?.correctAnswer) return;

  return (
    <>
      <div className={styles.question}>
        <Question listQuestions={currentQuestion} />
        <button
          className={styles.closeBtn}
          disabled={isPreload}
          onClick={backWelcome}>
          <Icon name="close" className={styles.close} />
        </button>
      </div>
      <Answer currentQuestion={currentQuestion} />

      <div className={styles.wrapper}>
        <Button disabled={!check} onClick={handleClick}>
          {getNameButton(isCheckAnswer, questionsList)}
        </Button>
        <span className={styles.score}>
          {score.answerCount} / {count}
        </span>
      </div>
    </>
  );
};

export default Card;
