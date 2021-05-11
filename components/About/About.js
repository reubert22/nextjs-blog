import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about_me}>
      <div className={styles.container_about_me_title}>
        <span>About</span>
      </div>
      <div className={styles.container_about_me_description}>
        <p>
          Hello! I'm Reubert, a Front-End Engineer based in Minas Gerais,
          Brazil.
        </p>
        <p>
          I love building Web/Mobile Applications using Javascript, ReactJs and
          React Native. Improving every day to build interactive/re-usable
          components. I'm a daily learner, curious and open to learning how to
          solve problems through Code.
        </p>
        <p>
          From the moment I produced "Hello world" in the console of my first
          application, I knew I was hooked into the world of software
          development.
        </p>
        <p>
          {" "}
          Striving to become a better professional than yesterday but less than
          tomorrow.
        </p>
      </div>
      <div className={styles.background_img} />
    </div>
  );
}
