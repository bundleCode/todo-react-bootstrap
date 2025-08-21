import { useContext } from "react";
import { TodosContext } from "../store/todo-context-store";

const WelcomeMsg = ({ msg }) => {
  const { todoS } = useContext(TodosContext);
  return (
    <>
      {!todoS.length && (
        <p className="d-flex justify-content-center fs-4 fw-medium text-secondary">
          {msg}
        </p>
      )}
    </>
  );
};
export default WelcomeMsg;
