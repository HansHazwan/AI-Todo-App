import { LogOut } from "lucide-react";
import { HeaderProps } from "./Header.types";
import Styles from "./Header.module.css";
import { HeaderTitle } from "../HeaderTitle";
import { HeaderAction } from "../HeaderAction/HeaderAction";

export function Header({ title, onRightClick }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <div className={Styles.right} />
      <div className={Styles.center}>
        <HeaderTitle>{title}</HeaderTitle>
      </div>
      <div className={Styles.left}>
        <HeaderAction onClick={onRightClick} />
      </div>
    </header>
  );
}
