import style from "./Greetings.module.css";

export default function Greetings() {
  return (
    <div className={style.greeting_presentation}>
      <div className={style.container_image}>
        <p />
      </div>
      <p className={style.greeting_greetings_text}>
        Hello there, welcome to my world!
      </p>
    </div>
  );
}
