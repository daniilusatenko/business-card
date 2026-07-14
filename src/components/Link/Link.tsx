import styles from "./Link.module.scss";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  rel?: string;
  underline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Link({ href, children, className, underline = true, onClick }: LinkProps) {
  return (
    <a
      href={href}
      className={`${styles.link} ${underline ? styles.underline : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
