import styles from "./Skills.module.css";

const skills = [
  { id: 1, title: "HTML && (S)CSS" },
  { id: 2, title: "(Type, Java)Script" },
  { id: 3, title: "React" },
  { id: 4, title: "REST APIs" },
  { id: 5, title: "Node.js" },
  { id: 6, title: "Graphql" },
  { id: 7, title: "Jest" },
  { id: 8, title: "React Testing Library" },
  { id: 9, title: "Git && Git(hub,lab)" },
];

export default function Skills() {
  return (
    <div className={styles.container_skills}>
      <div className={styles.container_skills_title}>
        <span>Skills</span>
      </div>
      <div className={styles.container_skills_items}>
        {skills.map((item) => (
          <span key={`skill-${item.id}-${item.title}`}>> {item.title}</span>
        ))}
      </div>
    </div>
  );
}
