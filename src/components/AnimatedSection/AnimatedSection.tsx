import { motion } from "framer-motion";
import styles from "./AnimatedSection.module.scss";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
