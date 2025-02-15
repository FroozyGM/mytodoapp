import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function TodoItem({
  title,
  isCompleted,
  toggleTaskCompletion,
  deleteTask,
  dueDate,
  priority,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const priorityClasses = {
    low: "priority-low",
    medium: "priority-medium",
    high: "priority-high",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Без срока";
    const date = new Date(dateString);
    return date.toLocaleString("ru-RU", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <li className={isCompleted ? "todo todo__completed" : "todo"}>
        <span className="todo-border"></span>
        <div className="todo-part">
          <div className="todo-toggle__outer" onClick={toggleTaskCompletion}>
            {isCompleted && <div className="todo-toggle__inner"></div>}
          </div>
          <h4 className="todo-title">{title}</h4>
        </div>

        <div className="todo-part">
          <div className="todo-details">
            <div className={`todo-priority ${priorityClasses[priority]}`}>
              {priority === "low" && "Низкий"}
              {priority === "medium" && "Средний"}
              {priority === "high" && "Высокий"}
            </div>
            <div>{formatDate(dueDate)}</div>
          </div>

          <FaTrashAlt
            className="todo-delete"
            onClick={() => setShowDeleteModal(true)}
          />
        </div>
      </li>

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onConfirm={() => {
          deleteTask(title);
          setShowDeleteModal(false);
        }}
        onCancel={() => setShowDeleteModal(false)}
      />
    </>
  );
}
