import { Title, AnimatedCard } from "@components";
import { stack } from "@/data";
import styles from "./Stack.module.scss";

export default function Stack() {
  return (
    <>
      <Title>Стек</Title>
      <section id="stack" className={styles["stack"]}>
        <div className={styles["stack__grid"]}>
          {stack.map((item, index) => (
            <AnimatedCard key={item.name} delay={index * 0.05}>
              <div className={styles["tech"]}>
                <img src={item.icon} alt={item.name} className={styles["tech__icon"]} />
                <span className={styles["tech__name"]}>{item.name}</span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
