import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem() {
  let itemName = "Buy Coffee";
  let itemDate = "4/2/2025";

  return (
    <>
      <div class="row mb-3">
        <div class="col-6 pad-left">{itemName}</div>
        <div class="col-4 pad-left">{itemDate}</div>
        <div class="col-2 text-start">
          <button type="button" className="btn btn-danger p-2  width">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
