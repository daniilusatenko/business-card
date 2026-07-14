import { profile, footer, navigation } from "@/data";
import { Link } from "@components";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <div className={styles.footer__column}>
            <h3 className={styles.footer__heading}>Контакты</h3>
            <div className={styles.footer__links}>
              {footer.contacts.map((contact) => (
                <Link key={contact.label} href={contact.href} rel="noopener noreferrer">
                  {contact.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.footer__column}>
            <h3 className={styles.footer__heading}>Платформы</h3>
            <div className={styles.footer__links}>
              {footer.socials.map((social) => (
                <Link key={social.label} href={social.href} rel="noopener noreferrer">
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.footer__column}>
            <h3 className={styles.footer__heading}>Навигация</h3>
            <div className={styles.footer__links}>
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
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        © {currentYear} {profile.name}. Все права защищены.
      </p>
    </footer>
  );
}
