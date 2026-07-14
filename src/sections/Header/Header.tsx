import { useEffect, useState } from "react";
import { navigation } from "@/data";
import { useTheme } from "@contexts";
import { Link } from "@components";
import { Sun, Moon } from "@assets/icons/index";
import styles from "./Header.module.scss";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const footerThreshold = documentHeight - windowHeight - 500;

      if (scrollY > footerThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles["header--scrolled"] : ""} ${
        !isVisible ? styles["header--hidden"] : ""
      }`}
    >
      <Link href="#top" className={styles.header__logo} underline={false}>
        {`</>`}
      </Link>

      <nav className={`${styles.header__nav} ${isMenuOpen ? styles["header__nav--open"] : ""}`}>
        {navigation.map((link) => (
          <Link
            key={link.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button className={styles.header__toggle} onClick={toggleTheme}>
        <img src={theme === "dark" ? Moon : Sun} alt="" />
      </button>

      <button
        className={`${styles.header__burger} ${isMenuOpen ? styles["header__burger--active"] : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Меню"
      >
        <span className={styles.header__burgerLine} />
        <span className={styles.header__burgerLine} />
        <span className={styles.header__burgerLine} />
      </button>
    </header>
  );
}
