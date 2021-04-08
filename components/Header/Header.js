import Image from "next/image";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.container_header}>
      <span className={style.header_name_text}>Reubert Barbosa</span>
    </div>
  );
}
