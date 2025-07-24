import TodoItem from "./TodoItem";
const ItemContainer = ({ todoList }) => {
  return (
    <>
      {todoList.map((itemTodo) => (
        <TodoItem
          key={itemTodo.id}
          itemName={itemTodo.name}
          itemDate={itemTodo.dueDate}
        />
      ))}
    </>
  );
};
export default ItemContainer;
