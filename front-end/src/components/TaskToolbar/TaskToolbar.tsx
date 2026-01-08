import { PlusIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { TaskToolbarProps } from "./TaskToolbar.type";
import Styles from "./TaskToolbar.module.css"
import { NewTodoButton } from "../NewTodoButton";

export function TaskToolbar({ newActionButton, searchActionButton }: TaskToolbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className={Styles.bar}>
      <NewTodoButton onClick={newActionButton} />
      <div className={Styles.searchContainer}>
        <button onClick={() => {
          searchActionButton(search);
        }}>
          <SearchIcon />
        </button>
        <input
          type={"text"}
          value={search}
          onChange={(message: React.ChangeEvent<HTMLInputElement>) => setSearch(message.target.value)} />
      </div>
    </header>
  );
}
