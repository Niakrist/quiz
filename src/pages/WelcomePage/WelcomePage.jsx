import { Button, Counter, Preloader } from "@/components";
import { useQuiz, useKeyPress } from "@/hooks";
import { getShuffleArray } from "@/utils";
import { QUEST_PAGE } from "@/constants";
import { questions } from "@/data/quizQuestions.json";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  const {
    count,
    handleChangePage,
    setQuestionsList,
    isLoadingQuiz,
    setIsLoadingQuiz,
  } = useQuiz();

  const handleClick = () => {
    setIsLoadingQuiz(true);
    setTimeout(() => {
      setQuestionsList(getShuffleArray(questions).slice(0, count));
      handleChangePage(QUEST_PAGE);
      setIsLoadingQuiz(false);
    }, 2000);
  };

  useKeyPress({ disabled: !count }, handleClick);

  return (
    <section>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Добро пожаловать</h1>
        <p className={styles.text}>на викторину по странам и столицам!</p>
      </div>
      <Counter isLoadingQuiz={isLoadingQuiz} />
      <Button
        disabled={!count || count[0] === "0" || isLoadingQuiz}
        onClick={handleClick}>
        {isLoadingQuiz ? <Preloader /> : "Начать"}
      </Button>
    </section>
  );
};

export default WelcomePage;
