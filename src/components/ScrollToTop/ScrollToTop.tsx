import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";
import { Top } from "@assets/icons/index";
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
      className={`${styles["scroll-to-top"]} ${isVisible ? styles["scroll-to-top--visible"] : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <img src={Top} alt="" className={styles["scroll-to-top__icon"]} />
    </button>
  );
}
