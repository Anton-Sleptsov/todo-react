import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  createAction,
  deleteAction,
  updateStatusAction,
} from "../feature/ToDoList";

export const ToDoListPage = () => {
  const todoList = useSelector((store: RootState) => store.todoList.todos);
  const dispatch = useDispatch();

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
  };

  const updateStatusToDo = (toDoId: number) => {
    dispatch(updateStatusAction(toDoId));
  };

  const deleteToDo = (toDoId: number) => {
    dispatch(deleteAction(toDoId));
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateStatusToDo={updateStatusToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
