import { useNavigate, useParams } from "react-router-dom";
import ToDo from "../models/ToDoItem";
import { useEffect, useState } from "react";

interface ComponentProps {
  todos: ToDo[];
}

export const ItemPage = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const currentTodo: ToDo | undefined = todos.find(
      (todo) => todo.id === Number(id)
    );

    if (currentTodo) {
      setTodo(currentTodo);
    } else {
      navigate("/404");
    }
  }, [todos, id, navigate]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};