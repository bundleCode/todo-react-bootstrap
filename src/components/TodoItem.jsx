import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoItem.module.css";

function TodoItem({ itemName, itemDate }) {
  return (
    <>
      <div className="row mb-3">
        <div className={`col-6 ${styles["pad-left"]}`}>{itemName}</div>
        <div className={`col-4 ${styles["pad-left"]}`}>{itemDate}</div>
        <div className="col-2 text-start">
          <button type="button" className={`btn btn-danger ${styles["width"]}`}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
