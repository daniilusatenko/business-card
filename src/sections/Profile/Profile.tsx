import { Button } from "@components";
import { profile } from "@/data";
import { avatar } from "@/assets/images";
import styles from "./Profile.module.scss";

export default function Profile() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className={styles["profile"]}>
      <div className={styles["profile__card"]}>
        <div className={styles["profile__container"]}>
          <img className={styles["profile__avatar"]} src={avatar} alt="" />
          <div className={styles["profile__content"]}>
            <h1 className={styles["profile__name"]}>{profile.name}</h1>
            <p className={styles["profile__role"]}>{profile.role}</p>
            <p className={styles["profile__description"]}>{profile.description}</p>
            <div className={styles["profile__actions"]}>
              <Button onClick={() => scrollToSection("footer")}>Связаться</Button>
              <Button onClick={() => scrollToSection("projects")}>Портфолио</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
