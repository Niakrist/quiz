import { IconSvg } from "@/components";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <IconSvg id="round-svg" className={styles.round1} />
      <IconSvg id="round-svg" className={styles.round2} />
      <IconSvg id="round-svg" className={styles.round3} />
    </div>
  );
};

export default Preloader;
