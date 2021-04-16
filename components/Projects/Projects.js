import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container_projects}>
      <div className={styles.container_projects_title}>
        <span>Projects</span>
      </div>
      <div className={styles.container_projects_items}>
        <div className={styles.project_item}>
          <div className={styles.box} />
          <div className={styles.project_blob}>
            <Image
              src="/images/project-blob.svg"
              height={200}
              width={200}
              alt="project blob"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
