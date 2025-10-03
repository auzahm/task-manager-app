import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import DarkModeToggle from "./components/DarkModeToggle";
import Toast from "./components/Toast";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleTaskAdded = () => setRefresh(!refresh);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4 sm:p-6 md:p-10 transition-colors">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Task Manager
        </h1>

        <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <AddTask onTaskAdded={handleTaskAdded} />
          <FilterTabs filter={filter} setFilter={setFilter} />
          <TaskList key={refresh} filter={filter} onTaskUpdated={handleTaskAdded} />
        </div>

        <footer className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
          Built with React, Node.js & Tailwind CSS
        </footer>
      </div>
      <Toast />
    </div>
  );
}

export default App;
