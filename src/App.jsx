import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { QuestionPage } from "./pages/QuestionPage";
import { ResultPage } from "./pages/ResultPage";
import { WelcomePage } from "./pages/WelcomePage";
import { QUEST_PAGE, RESULT_PAGE, WELCOME_PAGE } from "./constants";
import { useQuiz } from "./hooks/useQuiz";

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
