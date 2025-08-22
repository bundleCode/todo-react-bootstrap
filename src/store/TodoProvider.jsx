import { useReducer } from "react";
import { TodosContext } from "./todo-context-store";

/************** State handling by useState hook *************************/

// const TodoProvider = ({ children }) => {
//   const initialTodos = [
//     // { id: 1, name: "Buy Coffee", dueDate: "10/12/2024" },
//     // { id: 2, name: "Go to College", dueDate: "10/12/2024" },
//   ];

//   const [todoS, setTodoS] = useState(initialTodos);

//   const addTodoItem = (todoName, todoDate) => {
//     if (todoName && todoDate) {
//       let randId = Math.floor(Math.random() * 9999 + 1);
//       //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
//       setTodoS((currentTodoS) => [
//         ...currentTodoS,
//         { id: randId, name: todoName, dueDate: todoDate },
//       ]);
//     }
//   };

//   const delTodoItem = (id) => {
//     //updating state based on the previous state as react may not update the current value due to its asynchronous nature.
//     setTodoS((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <TodosContext.Provider
//       value={{
//         todoS,
//         addTodoItem,
//         delTodoItem,
//       }}
//     >
//       {children}
//     </TodosContext.Provider>
//   );
// };

// export default TodoProvider;

/************** State handling by useReducer hook *************************/

const todoSReducer = (currentTodoS, action) => {
  let newTodoS = [];
  if (action.type === "add-todo") {
    newTodoS = [
      ...currentTodoS,
      {
        id: action.payload.randId,
        name: action.payload.todoName,
        dueDate: action.payload.todoDate,
      },
    ];
  } else if (action.type === "delete-todo") {
    newTodoS = currentTodoS.filter((todo) => todo.id !== action.payload.randId);
  }
  return newTodoS;
};

const TodoProvider = ({ children }) => {
  const [todoS, dispatchTodoS] = useReducer(todoSReducer, []);

  const addTodoItem = (todoName, todoDate) => {
    let randId = Math.floor(Math.random() * 9999 + 1);
    const newTodoS = {
      type: "add-todo",
      payload: {
        randId,
        todoName,
        todoDate,
      },
    };
    dispatchTodoS(newTodoS);
  };

  const delTodoItem = (id) => {
    const DeleteTodoS = {
      type: "delete-todo",
      payload: {
        randId: id,
      },
    };
    dispatchTodoS(DeleteTodoS);
  };

  return (
    <TodosContext.Provider
      value={{
        todoS,
        addTodoItem,
        delTodoItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodoProvider;
