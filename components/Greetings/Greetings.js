import Image from "next/image";
import style from "./Greetings.module.css";

export default function Greetings() {
  return (
    <div className={style.greeting_presentation}>
      <div className={style.container_image}>
        <div className={style.container_background_image}>
          <Image
            src="/images/background-profile.svg"
            height={300}
            width={300}
            alt="profile img background"
          />
        </div>
        <Image
          priority
          src="/images/profile.jpg"
          className={style.borderCircle}
          height={144}
          width={144}
          alt="profile"
        />
      </div>
      <p className={style.greeting_greetings_text}>
        Hello there, welcome to my world!
      </p>
      <div className={style.down_indicator}>
        <div className={style.arrow_down} />
      </div>
    </div>
  );
}
