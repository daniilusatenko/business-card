import { Title, AnimatedCard } from "@components";
import { skills } from "@/data";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <>
      <Title>Навыки</Title>
      <section id="skills" className={styles["skills"]}>
        <div className={styles["skills__grid"]}>
          {skills.map((group, index) => (
            <AnimatedCard key={group.category} delay={index * 0.1}>
              <div className={styles["skill"]}>
                <h3 className={styles["skill__title"]}>{group.category}</h3>
                <ul className={styles["skill__list"]}>
                  {group.items.map((item, i) => (
                    <li key={i} className={styles["skill__item"]}>
                      <span className={styles["skill__bullet"]}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
