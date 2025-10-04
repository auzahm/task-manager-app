import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = ({ onTaskUpdated, filter }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [onTaskUpdated]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 mt-2">No tasks to display!</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task._id} task={task} onTaskUpdated={fetchTasks} />
        ))
      )}
    </div>
  );
};

export default TaskList;
