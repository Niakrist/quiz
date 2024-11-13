import { Icon } from "@/components";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <Icon name="ellipse" className={styles.round1} />
      <Icon name="ellipse" className={styles.round2} />
      <Icon name="ellipse" className={styles.round3} />
    </div>
  );
};

export default Preloader;
