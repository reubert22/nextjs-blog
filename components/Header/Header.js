import { menus } from "../../utils/constants";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles["container-header"]}>
      <span className={styles["menus"]}>
        {menus.map((item) => (
          <a
            key={`skill-${item.id}-${item.title}`}
            href={item.href}
            className={styles["item"]}
          >
            &gt; {item.title}
          </a>
        ))}
      </span>
    </div>
  );
}
