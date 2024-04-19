import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.title}>
        UCSD Classure
      </div>

      <div className={styles.inputDiv}>
        <input type="text" className={styles.input} id="courseInput" name="courseInput" />
      </div>
    </div>
  );
}
