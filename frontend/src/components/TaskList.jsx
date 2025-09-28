import React, { useEffect, useState } from "react";
import API from "../utils/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="border p-3 rounded shadow bg-gray-50"
            >
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
