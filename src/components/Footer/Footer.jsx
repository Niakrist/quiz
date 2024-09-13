import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru/" target="_blank" rel="nofollow">
          preax
        </a>
      </p>
    </footer>
  );
};

export default Footer;
