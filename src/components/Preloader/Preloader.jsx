import { IconSvg } from "@/components";
import Icon from "../Icon/Icon";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <Icon name="ellipse" className={styles.round1} />
      <Icon name="ellipse" className={styles.round2} />
      <Icon name="ellipse" className={styles.round3} />

      {/* <IconSvg id="round-svg" className={styles.round1} />
      <IconSvg id="round-svg" className={styles.round2} />
      <IconSvg id="round-svg" className={styles.round3} /> */}
    </div>
  );
};

export default Preloader;
