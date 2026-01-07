import { TaskView } from "../TaskView/TaskView";
import { TaskListViewProps } from "./TaskListView.type";
import Styles from "./TaskListView.module.css"

export function TaskListView({ taskList }: TaskListViewProps) {
  let taskView = taskList.map((item, index) => {
    return (
      <li className={Styles["task-item"]} key={index}>
        <TaskView
          title={item.title}
          isTick={item.isDone}
          date={item.date}
        />
      </li>
    )
  })

  return (
    <ul className={Styles["task-list"]}>
      {taskView}
    </ul>
  );
}
