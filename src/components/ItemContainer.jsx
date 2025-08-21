import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todo-context-store";

const ItemContainer = () => {
  const { todoS } = useContext(TodosContext);
  return (
    <>
      {todoS.map((itemTodo) => (
        <TodoItem
          key={itemTodo.id}
          id={itemTodo.id}
          itemName={itemTodo.name}
          itemDate={itemTodo.dueDate}
        />
      ))}
    </>
  );
};
export default ItemContainer;
