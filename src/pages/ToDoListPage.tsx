import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  fetchAllToDos,
  createToDoAsync,
  deleteToDoAsync,
  updateStatusToDoAsync, // Обновление статуса задачи
} from "../feature/todoList";
import { useEffect } from "react";

export const ToDoListPage = () => {
  const todoList = useSelector((store: RootState) => store.todoList.todos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllToDos());
  }, [dispatch]);

  const createNewToDo = (text: string) => {
    dispatch(createToDoAsync(text));
  };

  const updateStatusToDo = (toDoId: number) => {
    dispatch(updateStatusToDoAsync(toDoId)); // Локальное обновление статуса
  };

  const deleteToDo = (toDoId: number) => {
    dispatch(deleteToDoAsync(toDoId));
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        updateStatusToDo={updateStatusToDo} // Передаем функцию обновления статуса
        deleteToDo={deleteToDo}
      />
    </>
  );
};
