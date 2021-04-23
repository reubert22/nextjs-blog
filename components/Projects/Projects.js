import styles from "./Projects.module.css";

const mockProjects = [
  { id: 1, project_name: "Project name 1", where: "where1" },
  { id: 2, project_name: "Project name 2", where: "where2" },
  { id: 3, project_name: "Project name 3", where: "where3" },
  { id: 4, project_name: "Project name 4", where: "where4" },
  { id: 5, project_name: "Project name 5", where: "where5" },
  { id: 6, project_name: "Project name 6", where: "where6" },
  { id: 7, project_name: "Project name 7", where: "where7" },
  { id: 8, project_name: "Project name 8", where: "where8" },
];

export default function Projects() {
  return (
    <div className={styles.container_projects}>
      <div className={styles.container_projects_title}>
        <span>Projects</span>
      </div>
      <div className={styles.container_projects_items}>
        <div className={styles.project_item}>
          {mockProjects.map((project) => (
            <div className={styles.box}>{project.project_name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
