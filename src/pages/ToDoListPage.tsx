import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import ToDo from "../models/ToDoItem";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text,
      isDone: false,
    };
    
    setTodos([...todos, newToDo]);
  };

  const updateStatusToDo = (toDoId: number) => {
    const newTodos: ToDo[] = todos.map((todo) => {
      if (todo.id === toDoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const deleteToDo = (toDoId: number) => {
    const newTodos: ToDo[] = todos.filter((todo) => todo.id !== toDoId);

    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todos}
        updateStatusToDo={updateStatusToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
