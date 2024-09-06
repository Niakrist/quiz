import logoSrc from "@/assets/img/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a className={styles.logoLink} href="#">
      <img src={logoSrc} alt="Логотип игры Quiz по странам и столицам " />
    </a>
  );
};

export default Logo;
