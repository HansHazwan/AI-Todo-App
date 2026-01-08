import { PlusIcon } from "lucide-react";
import { NewTodoButtonProps } from "./NewTodoButton.type";
import Styles from "./NewTodoButton.module.css";

export function NewTodoButton({ onClick }: NewTodoButtonProps) {
  return (
    <button
      className={Styles.button}
      onClick={onClick}
    >
      <p className={Styles.title}><strong>new</strong></p>
      <PlusIcon className={Styles.icon} />
    </button>
  );
}
