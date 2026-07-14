import { Title, AnimatedCard } from "@components";
import { projects } from "@/data";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <>
      <Title>Проекты</Title>
      <section id="projects" className={styles.projects}>
        <div className={styles.projects__grid}>
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className={styles.card}>
                {project.image && (
                  <div className={styles.card__wrapper}>
                    <img src={project.image} alt={project.title} className={styles.card__image} />
                  </div>
                )}
                <h3 className={styles.card__title}>{project.title}</h3>
                <p className={styles.card__description}>{project.description}</p>
                <div className={styles.card__stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.card__tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card__link}
                  >
                    Посмотреть →
                  </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
