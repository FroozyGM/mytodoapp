import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.name}
          deleteTask={deleteTask}
          toggleTaskCompletion={() => toggleTaskCompletion(task.name)}
          title={task.name}
          isCompleted={task.isCompleted}
          dueDate={task.dueDate}
          priority={task.priority}
        />
      ))}
    </ul>
  );
}
