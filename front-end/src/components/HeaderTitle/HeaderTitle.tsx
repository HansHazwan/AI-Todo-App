import { HeaderTitleProps } from "./HeaderTitle.type";
import Styles from "./HeaderTitle.module.css";

export function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <h2 className={Styles.title}>{children}</h2>
  );
}
