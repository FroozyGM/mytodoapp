📌 Todo App
A simple Todo application built with Wails (Go backend + React frontend). The app allows you to manage tasks with due dates and priorities, automatically saving and loading them from a local tasks.json file.

🚀 Features
✅ Add tasks with a name, due date, and priority (low/medium/high).
✅ Mark tasks as complete/incomplete.
✅ Filter tasks by status: All, Completed, or Uncompleted.
✅ Delete tasks with confirmation.
✅ Auto-save tasks to tasks.json on changes.
✅ Persistent storage – tasks are loaded on app startup.

⚙️ How to Run
📌 Prerequisites
Make sure you have the following installed:

Go (v1.16 or higher)

Node.js (v14 or higher)

Wails CLI (install via):
📥 Installation
Clone the repository:
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
Install frontend dependencies:
```bash
cd frontend
npm install
```

Build the frontend:
```bash
npm run build
cd ..
```
🔧 Development
Run the app in live development mode:
```bash
wails dev
```

![screenshot_1](https://github.com/user-attachments/assets/e313c9ec-b074-4837-afd3-c518cd50d16b)
![screenshot_2](https://github.com/user-attachments/assets/77135b8c-0006-4b81-811a-92e551e53191)
![screenshot_3](https://github.com/user-attachments/assets/3dc917d9-d4f3-49e5-b5c7-bde317fadf9d)
![screenshot_4](https://github.com/user-attachments/assets/0af313f8-4982-4576-8a1c-85ec78a1ec82)
