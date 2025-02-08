import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

const Roadmap = () => {
  const initialTasks = [
    { id: 1, title: "Learn Networking Basics", completed: false },
    { id: 2, title: "Understand Operating Systems", completed: false },
    { id: 3, title: "Explore Cryptography", completed: false },
    { id: 4, title: "Basics of Penetration Testing", completed: false },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("cyberTasks"));
    return savedTasks || initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("cyberTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleRightClick = (e, id) => {
    e.preventDefault();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <Dashboard />

      <div className="container mt-5">
        <h1 className="text-success mb-4"><strong>Cybersecurity Basics Roadmap🗺️</strong></h1>
        <ListGroup>
          {tasks.map((task) => (
            <ListGroup.Item
              key={task.id}
              onContextMenu={(e) => handleRightClick(e, task.id)}
              className={`d-flex justify-content-between align-items-center ${
                task.completed ? "text-decoration-line-through bg-light" : ""
              }`}
              style={{ marginBottom: "15px" }} 
            >
              {task.title}
              {task.completed && (
                <span className="badge bg-success">Completed</span>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="text-muted mt-3">
          ** Right-click a task to mark it as completed or incomplete.
        </p>
      </div>
    </>
  );
};

export default Roadmap;
