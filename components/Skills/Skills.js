import { skills } from "../../utils/constants";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div id="skills" className={styles["container-skills"]}>
      <div className={styles["container-skills-title"]}>
        <span>Skills</span>
      </div>
      <div className={styles["container-skills-items"]}>
        {skills.map((item) => (
          <span key={`skill-${item.id}-${item.title}`}>&gt; {item.title}</span>
        ))}
      </div>
    </div>
  );
}
