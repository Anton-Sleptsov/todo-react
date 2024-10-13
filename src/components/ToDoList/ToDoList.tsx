import "./ToDoList.scss";
import ToDo from "../../models/ToDoItem";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

export const ToDoList = (props: {
  todos: ToDo[];
  updateStatusToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((todo) => todo.isDone)
      .map((todo) => {
        return (
          <ToDoListItem
            item={todo}
            key={todo.id}
            updateStatusToDo={props.updateStatusToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const unCheckedList = () => {
    return props.todos
      .filter((todo) => !todo.isDone)
      .map((todo) => {
        return (
          <ToDoListItem
            item={todo}
            key={todo.id}
            updateStatusToDo={props.updateStatusToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{unCheckedList()}</ul>
      <ul className="todo-list completed">{checkedList()}</ul>
    </div>
  );
};
