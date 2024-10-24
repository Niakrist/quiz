import { useQuiz } from "@/hooks";
import logoSrc from "@/assets/icons/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  const { backWelcome } = useQuiz();
  const handleClick = (e) => {
    e.preventDefault();
    backWelcome();
  };
  return (
    <a className={styles.logoLink} href="#" onClick={handleClick}>
      <img src={logoSrc} alt="Логотип игры Quiz по странам и столицам " />
    </a>
  );
};

export default Logo;
