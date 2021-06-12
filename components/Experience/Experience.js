import { experience } from "../../utils/constants";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles["container-experience"]}>
      <div className={styles["container-experience-title"]}>
        <span>Experience</span>
      </div>
      <div className={styles["container-experience-items"]}>
        {experience.reverse().map((item) => (
          <div
            key={`experience-${item.id}-${item.role}`}
            className={styles["experience-items"]}
          >
            <div className={styles["experience-item-title-date"]}>
              <span className={styles["title"]}>&gt; {item.title}</span>
              <span className={styles["date"]}> {item.date}</span>
            </div>
            <span className={styles["role"]}>{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
