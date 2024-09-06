import { Header } from "@/components/Header";
import { Welcome } from "@/pages/Welcome";
import { QuestionPage } from "@/pages/QuestionPage";
import { Result } from "@/pages/Result";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { questions, countries } from "../quizz_questions.json";

function App() {
  const [component, setComponent] = useState("welcome");
  const [count, setCount] = useState(1);
  const [listQuestions, setListQuestions] = useState([]);

  const handleClick = (comp) => {
    setComponent(comp);
  };

  const hanleCount = (num) => {
    setCount((prevState) => (prevState = num));
  };

  const fillListQuestions = () => {
    setListQuestions((prevState) => [
      ...prevState,
      ...generateListQuestions(count),
    ]);
  };

  const generateListQuestions = (num) => {
    const setQuestions = new Set();

    while (num > setQuestions.size) {
      let questionItem =
        questions[Math.floor(Math.random() * questions.length)];

      const answers = new Set([questionItem.correctAnswer]);
      while (answers.size < 4) {
        const answer = countries[Math.floor(Math.random() * questions.length)];
        answers.add(answer);
      }
      questionItem.answers = [...answers];

      setQuestions.add(questionItem);
    }
    return [...setQuestions];
  };

  return (
    <>
      <Header />
      <main>
        {component === "welcome" && (
          <Welcome
            onClick={handleClick}
            onCount={hanleCount}
            count={count}
            fillListQuestions={fillListQuestions}
          />
        )}
        {component === "question" && (
          <QuestionPage
            count={count}
            onClick={handleClick}
            listQuestions={listQuestions}
          />
        )}
        {component === "result" && <Result onClick={handleClick} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
