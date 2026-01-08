import { LogOut } from "lucide-react";
import { HeaderProps } from "./Header.types";
import Styles from "./Header.module.css";
import { HeaderTitle } from "../HeaderTitle";

export function Header({ title, onRightClick }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <div />
      <div className={Styles.title}>
        <HeaderTitle>{title}</HeaderTitle>
      </div>
      <button
        className={Styles.iconButton}
        onClick={onRightClick}
        aria-label="Logout">
        <LogOut />
      </button>
    </header>
  );
}
