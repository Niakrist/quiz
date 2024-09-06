import styles from "./Container.module.css";

const Container = ({ cl, children }) => {
  return <section className={styles.card + " " + cl}>{children}</section>;
};

export default Container;
