import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem";
import { RootState } from "../store";

export const ViewListPage = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className="container">
      {todos.map((todo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
