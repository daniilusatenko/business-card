import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      ⏏︎
    </button>
  );
}
