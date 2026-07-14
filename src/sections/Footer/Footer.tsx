// src/sections/Footer/Footer.tsx
import { profile, footer, navigation } from "@/data";
import { Button, Link } from "@components";
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
              <Link href={`https://t.me/${footer.contacts.telegram}`}>
                {footer.contacts.telegram}
              </Link>
              {footer.contacts.phones.map((phone, index) => (
                <Link key={index} href={`tel:${phone.replace(/\s/g, "")}`}>
                  {phone}
                </Link>
              ))}
              {footer.contacts.emails.map((mail, index) => (
                <Link key={index} href={`mailto:${mail.replace(/\s/g, "")}`}>
                  {mail}
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

        <div className={styles.footer__right}>
          <h3 className={styles.footer__heading}>Связаться со мной</h3>
          <form className={styles.footer__form}>
            <textarea placeholder="Введите сообщение" className={styles.footer__textarea} />
            <div className={styles.footer__row}>
              <input type="text" placeholder="Ваше имя" className={styles.footer__input} />
            </div>
            <div className={styles.footer__row}>
              <input type="email" placeholder="Ваш email" className={styles.footer__input} />
              <Button>↪</Button>
            </div>
          </form>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        © {currentYear} {profile.name}. Все права защищены.
      </p>
    </footer>
  );
}
