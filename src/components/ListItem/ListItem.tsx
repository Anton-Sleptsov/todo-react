import { Link } from "react-router-dom";
import ToDo from "../../models/ToDoItem";
import classes from "./ListItem.module.scss";

interface ComponentProps {
  todo: ToDo;
}

export const ListItem = ({ todo }: ComponentProps) => {
  return (
    <Link
      className={`${classes.link} ${
        todo.isDone ? classes.check : classes.uncheck
      }`}
      to={`/list/${todo.id}`}
    >
      {todo.text}
    </Link>
  );
};
