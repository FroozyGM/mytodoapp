import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import "./assets/css/style.css";

function App() {
  const categories = ["Все", "Завершенные", "Не завершенные"];
  const [activeCategory, setActiveCategory] = useState(0);
  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    async function loadTasks() {
      try {
        const tasks = await window.go.main.App.LoadTasks();
        setTasks(tasks);
      } catch (err) {
        console.error('Ошибка загрузки задач:', err);
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      try {
        await window.go.main.App.SaveTasks(tasks);
      } catch (err) {
        console.error('Ошибка сохранения задач:', err);
      }
    }
    saveTasks();
  }, [tasks]);

  function toggleTaskCompletion(name) {
    const updatedTasks = tasks.map((task) => {
      if (task.name === name) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function filterTasks(activeIndex) {
    if (activeIndex === 2) {
      return tasks.filter((task) => !task.isCompleted);
    } else if (activeIndex === 1) {
      return tasks.filter((task) => task.isCompleted);
    } else {
      return tasks;
    }
  }

  function addTask(newTask) {
    setTasks([
      ...tasks,
      {
        name: newTask.name,
        isCompleted: false,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
      },
    ]);
  }

  function deleteTask(name) {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
  }

  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <TodoList
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            tasks={filterTasks(activeCategory)}
          />
        </div>
        <Footer addTask={addTask} />
      </div>
    </div>
  );
}

export default App;