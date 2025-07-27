import styles from "./TodoItem.module.css";

function TodoItem({ id, itemName, itemDate, handleDelTodo }) {
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
            onClick={() => handleDelTodo(id)}
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
