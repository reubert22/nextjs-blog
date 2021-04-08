import Image from "next/image";
import ExternalLink from "../ExternalLink/ExternalLink";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.container_footer}>
      <div className={style.container_footer_medias}>
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
        <ExternalLink href="https://twitter.com/ReubertBarbosa">
          <Image
            src="/images/twitter.svg"
            height={28}
            width={28}
            alt="twitter social media"
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
      <div className={style.container_footer_copy}>
        © 2021,<span className={style.author_text}> Reubert. </span> Built with
        <span className={style.tech_text}> (Next and React)Js</span>
      </div>
    </div>
  );
}
