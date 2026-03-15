import React, { useEffect, useState } from "react";
import API from "../services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">

      <h2>Tasks</h2>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task._id} className="list-group-item">
            {task.title} - {task.status}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Tasks;