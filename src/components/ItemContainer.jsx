import TodoItem from "./TodoItem";
const ItemContainer = ({ todoList, handleDelTodos }) => {
  return (
    <>
      {todoList.map((itemTodo) => (
        <TodoItem
          key={itemTodo.id}
          id={itemTodo.id}
          itemName={itemTodo.name}
          itemDate={itemTodo.dueDate}
          handleDelTodo={handleDelTodos}
        />
      ))}
    </>
  );
};
export default ItemContainer;
