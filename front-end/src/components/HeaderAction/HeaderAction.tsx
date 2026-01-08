import { LogOut } from "lucide-react";
import { HeaderActionProps } from "./HeaderAction.type";
import Styles from "./HeaderAction.module.css";

export function HeaderAction({ onClick }: HeaderActionProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Logout"
      className={Styles.button}
    >
      <LogOut />
    </button>
  );
}
