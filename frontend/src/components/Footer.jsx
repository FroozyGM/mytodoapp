import { useState } from "react";

function Footer({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const getMinDate = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  function submitForm(event) {
    event.preventDefault();
    if (taskInput.trim().length > 0) {
      addTask({
        name: taskInput,
        dueDate: dueDate,
        priority: priority,
      });
      setTaskInput("");
      setDueDate("");
      setPriority("medium");
    } else {
      alert("Заполните название задачи!");
    }
  }

  return (
    <footer className="app-footer">
      <div className="form-wrapper">
        <form
          className={isOpen ? "form form-visible" : "form"}
          onSubmit={submitForm}
        >
          <input
            type="text"
            placeholder="Название задачи"
            className="form-input"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            required
          />

          <input
            type="datetime-local"
            className="form-input date-input"
            value={dueDate}
            min={getMinDate()}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </select>

          <button type="submit" className="form-btn">
            Добавить
          </button>
        </form>
      </div>

      <button
        className="footer-btn"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? "-" : "+"}
      </button>
    </footer>
  );
}

export default Footer;
