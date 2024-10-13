import "./ToDoListItem.scss";
import ToDo from "../../../models/ToDoItem";

export const ToDoListItem = (props: {
  item: ToDo;
  updateStatusToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.item.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deleteToDo(props.item.id)}
        ></button>
        <button
          className={props.item.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.updateStatusToDo(props.item.id)}
        ></button>
      </div>
    </li>
  );
};
