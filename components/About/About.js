import styles from "./About.module.css";

export default function About() {
  return (
    <div id="about" className={styles["about-me"]}>
      <div className={styles["container-about-me-title"]}>
        <span>About</span>
      </div>
      <div className={styles["container-about-me-description"]}>
        <p>I'm Reubert, a seasoned Front End Developer based in Brazil.</p>
        <p>
          With over <span className={styles["highlight"]}>6+ years</span> of
          experience, I specialize in crafting Web/Mobile Applications using{" "}
          <a href="#skills" className={styles["italic"]}>
            TypeScript, Javascript, ReactJs, and React Native.
          </a>
        </p>
        <p>
          My portfolio includes diverse projects for clients in Brazil and
          internationally. Meticulous and dedicated, I excel in building
          interactive, reusable components. The satisfaction of seeing code come
          to life fuels my passion for software development.
        </p>
        <p>
          Committed to continuous improvement, I eagerly embrace new challenges
          and stay updated on industry trends.
        </p>
        <p> Striving to become a better professional every day. 🚀</p>
      </div>
      <div className={styles["background-img"]} />
    </div>
  );
}
