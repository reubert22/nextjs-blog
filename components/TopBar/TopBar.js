import styles from "./TopBar.module.css";

export default function TopBar({ siteTitle }) {
  return (
    <div className={styles["top-bar"]}>
      <p className={styles["title"]}>{siteTitle}</p>
      <div className={styles["container-menu-burg"]}>
        <input
          className={styles["menu-hamburguer-input"]}
          id="menu-hamburguer"
          type="checkbox"
        />

        <label for="menu-hamburguer">
          <div className={styles["menu"]}>
            <span className={styles["hamburguer"]}></span>
          </div>
        </label>
      </div>
    </div>
  );
}
