import Image from "next/image";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.container_header}>
      <span className={style.header_name_text}>Reubert Barbosa</span>
      <div className={style.container_social_media}>
        <Image
          src="/images/instagram.svg"
          height={35}
          width={35}
          alt="instagram social media"
        />
        <Image
          src="/images/twitter.svg"
          height={35}
          width={35}
          alt="twitter social media"
        />
        <Image
          src="/images/github.svg"
          height={35}
          width={35}
          alt="github social media"
        />
      </div>
    </div>
  );
}
