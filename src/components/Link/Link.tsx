import styles from "./Link.module.scss";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  rel?: string;
  underline?: boolean;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Link({
  href,
  children,
  className,
  underline = true,
  target,
  rel,
  onClick,
}: LinkProps) {
  return (
    <a
      href={href}
      className={`${styles.link} ${underline ? styles.underline : ""} ${className}`}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
