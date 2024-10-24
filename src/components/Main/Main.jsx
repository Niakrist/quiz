import { useQuiz } from "@/hooks";
import { clsx } from "@/utils";
import { RESULT_PAGE } from "@/constants";
import styles from "./Main.module.css";

const Main = ({ children }) => {
  const { page } = useQuiz();
  return (
    <main
      className={clsx(
        styles.wrapper,
        page === RESULT_PAGE && styles.wrapperResult
      )}>
      {children}
    </main>
  );
};

export default Main;
