import styles from "./Greetings.module.css";

export default function Greetings() {
  return (
    <div className={styles["greeting-presentation"]}>
      <div className={styles["container-image"]}>
        <p />
      </div>
      <p className={styles["greeting-greetings-text"]}>
        Hello there, welcome to my world!
      </p>
    </div>
  );
}
