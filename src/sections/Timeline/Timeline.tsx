import { Title, AnimatedCard } from "@components";
import { timeline } from "@/data";
import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <>
      <Title>Путь в IT</Title>
      <section id="timeline" className={styles.timeline}>
        <div className={styles.timeline__container}>
          {timeline.map((item, index) => (
            <AnimatedCard key={item.year} delay={index * 0.1}>
              <div className={styles.timeline__item}>
                {index < timeline.length - 1 && <div className={styles.timeline__line} />}
                <div className={styles.timeline__dot} />
                <div className={styles.timeline__content}>
                  <div className={styles.timeline__header}>
                    <span className={styles.timeline__year}>{item.year}</span>
                    <h3 className={styles.timeline__title}>{item.title}</h3>
                  </div>
                  <p className={styles.timeline__description}>{item.description}</p>
                  <ul className={styles.timeline__details}>
                    {item.details.map((detail) => (
                      <li key={detail} className={styles.timeline__detail}>
                        <span className={styles.timeline__bullet}>▹</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
