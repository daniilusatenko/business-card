import { Title, AnimatedSection } from "@components";
import { about } from "@/data";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <Title>{about.title}</Title>
      <AnimatedSection id="about" className={styles["about"]}>
        <div className={styles["about__text"]}>
          {about.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["about__terminal"]}>
          <div className={styles["terminal"]}>
            <div className={styles["terminal__header"]}>
              <div className={styles["terminal__dots"]}>
                <span className={styles["terminal__dot"]} />
                <span className={styles["terminal__dot"]} />
                <span className={styles["terminal__dot"]} />
              </div>
              <span className={styles["terminal__title"]}>{about.terminal.title}</span>
            </div>

            <div className={styles["terminal__body"]}>
              <div className={styles["terminal__row"]}>
                <pre className={styles["terminal__ascii"]}>{about.terminal.ascii}</pre>

                <div className={styles["terminal__info"]}>
                  {about.terminal.stats.map((item, index) => (
                    <div key={index} className={styles["terminal__line"]}>
                      <span className={styles["terminal__key"]}>{item.key}</span>
                      <span className={styles["terminal__value"]}>{item.value}</span>
                    </div>
                  ))}
                  <div className={styles["terminal__colors"]}>
                    <div className={styles["terminal__line"]}>
                      {[...Array(8)].map((_, i) => (
                        <span key={i} className={styles["terminal__color"]} />
                      ))}
                    </div>
                    <div className={styles["terminal__line"]}>
                      {[...Array(8)].map((_, i) => (
                        <span key={i} className={styles["terminal__color"]} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["terminal__prompt"]}>
                <span className={styles["terminal__user"]}>~</span>
                <span className={styles["terminal__git"]}>main</span>
                <span className={styles["terminal__cursor"]}>▋</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
