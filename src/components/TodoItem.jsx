// import styles from "./TodoItem.module.css";

import { useContext } from "react";
import { TodosContext } from "../store/todo-context-store";

function TodoItem({ id, itemName, itemDate }) {
  const { delTodoItem } = useContext(TodosContext);
  return (
    <>
      <div className="row mb-1">
        <div className="col-6  border border-lite d-flex align-items-center ps-2">
          {itemName}
        </div>
        <div className="col-4  border border-liet d-flex align-items-center ps-2">
          {itemDate}
        </div>
        <div className="col-2 text-start">
          <button
            type="button"
            className="btn btn-danger width rounded-0"
            onClick={() => delTodoItem(id)}
          >
            <i className="bi bi-trash"></i>
            <span className="d-none d-md-inline">Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
