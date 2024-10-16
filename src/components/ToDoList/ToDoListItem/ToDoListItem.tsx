import ToDo from "../../../models/ToDoItem";
import {
  ToDoItemControl,
  ToDoItemControls,
  ToDoItemText,
  ToDoItemWrapper,
} from "./ToDoListItem.styled";
import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trashIcon from "../../../assets/images/trash.png";

export const ToDoListItem = (props: {
  item: ToDo;
  updateStatusToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <ToDoItemWrapper>
      <ToDoItemText>{props.item.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.item.id)}
        />
        <ToDoItemControl
          icon={props.item.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateStatusToDo(props.item.id)}
        />
      </ToDoItemControls>
    </ToDoItemWrapper>
  );
};
