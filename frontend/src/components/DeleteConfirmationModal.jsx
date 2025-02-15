import { useEffect } from "react";

export default function DeleteConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Удалить задачу?</h3>
        <div className="modal-buttons">
          <button className="modal-btn confirm" onClick={onConfirm}>
            Удалить
          </button>
          <button className="modal-btn cancel" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
