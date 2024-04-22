import Image from "next/image";

import ExternalLink from "../ExternalLink/ExternalLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["container-footer"]}>
      <div className={styles["container-footer-medias"]}>
        <ExternalLink href="https://www.linkedin.com/in/reubertbarbosa/">
          <Image
            src="/images/linkedin.svg"
            height={28}
            width={28}
            alt="linkedin social media"
          />
        </ExternalLink>

        <ExternalLink href="https://www.instagram.com/barbosa_reubert/">
          <Image
            src="/images/instagram.svg"
            height={28}
            width={28}
            alt="instagram social media"
          />
        </ExternalLink>
        <ExternalLink href="https://stackoverflow.com/users/10327939/reubert-barbosa">
          <Image
            src="/images/stackoverflow.svg"
            height={28}
            width={28}
            alt="stackoverflow social media"
          />
        </ExternalLink>
        <ExternalLink href="https://github.com/reubert22">
          <Image
            src="/images/github.svg"
            height={28}
            width={28}
            alt="github social media"
          />
        </ExternalLink>
      </div>
      <div className={styles["container-footer-copy"]}>
        © 2021, <span className={styles["author-text"]}>Reubert. </span> Built
        with <span className={styles["tech-text"]}>(Next and React)Js</span>
      </div>
    </div>
  );
}
