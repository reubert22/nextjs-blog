import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles["container-header"]}>
      <span className={styles["header-name-text"]}>Reubert Barbosa</span>
    </div>
  );
}
