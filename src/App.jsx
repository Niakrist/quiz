import { Header, Main, Footer } from "@/components";
import { QuestionPage, ResultPage, WelcomePage } from "@/pages";
import { useQuiz } from "@/hooks";
import { QUEST_PAGE, RESULT_PAGE, WELCOME_PAGE } from "./constants";

const App = () => {
  const { page } = useQuiz();

  return (
    <>
      <Header />
      <Main>
        {page === WELCOME_PAGE && <WelcomePage />}
        {page === QUEST_PAGE && <QuestionPage />}
        {page === RESULT_PAGE && <ResultPage />}
      </Main>
      <Footer />
    </>
  );
};

export default App;
