import { Icon } from "@/components";
import { useQuiz } from "@/hooks";
import styles from "./Logo.module.css";

const Logo = () => {
  const { backWelcome } = useQuiz();
  const handleClick = (e) => {
    e.preventDefault();
    backWelcome();
  };
  return (
    <a className={styles.logoLink} href="#" onClick={handleClick}>
      <Icon name="logo" className={styles.logo} />
    </a>
  );
};

export default Logo;
