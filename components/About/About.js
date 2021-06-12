import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles["about-me"]}>
      <div className={styles["container-about-me-title"]}>
        <span>About</span>
      </div>
      <div className={styles["container-about-me-description"]}>
        <p>
          Hello! I'm Reubert, a Front-End Engineer based in Minas Gerais,
          Brazil.
        </p>
        <p>
          I love building Web/Mobile Applications using Javascript, ReactJs, and
          React Native. Improving every day to build interactive/reusable
          components. I'm a daily learner, curious, and open to learning how to
          solve problems through Code.
        </p>
        <p>
          From the moment I produced "Hello world" in the console of my first
          application, I knew I was hooked into the world of software
          development.
        </p>
        <p>
          Outside this developer world, I like to hang out with my friends and
          girlfriend to have some beer, talk, and have fun. I also like to ride
          my bike and motorcycle (2 wheels for life). You can also find me on
          Instagram{" "}
          <a href="https://www.instagram.com/barbosa_reubert/" target="_blank">
            (@barbosa_reubert)
          </a>
          .
        </p>
        <p> Striving to become a better professional every day.</p>
      </div>
      <div className={styles["background-img"]} />
    </div>
  );
}
