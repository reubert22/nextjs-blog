import Image from "next/image";
import styles from "./Greetings.module.css";

export default function Greetings() {
  return (
    <div className={styles["greeting-presentation"]}>
      <div className={styles["container-image"]}>
        <p />
      </div>

      <Image
        src="/images/profile.jpeg"
        height={120}
        width={120}
        alt="Profile image"
        objectFit="contain"
        className={styles["container-image-profile"]}
      />
      <div className={styles["container-greeting"]}>
        <p className={styles["name"]}>Reubert Barbosa</p>
        <p className={styles["role"]}>Front End Developer</p>
        <div className={styles["location"]}>
          <Image
            src="/images/location.svg"
            height={28}
            width={28}
            alt="Location social media"
          />
          <span>Minas Gerais, </span>
          <span>Brazil</span>
        </div>
      </div>
    </div>
  );
}
