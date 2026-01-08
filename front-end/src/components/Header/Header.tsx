import { LogOut } from "lucide-react";
import { HeaderProps } from "./Header.types";
import Styles from "./Header.module.css"

export function Header({ title, onRightClick }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <div />
      <h2 className={Styles.title}>
        {title}
      </h2>
      <button
        className={Styles.iconButton}
        onClick={onRightClick}
        aria-label="Logout">
        <LogOut />
      </button>
    </header>
  );
}
