// todo.jsx
import React, { useState } from "react";
import "./todo.css"; 

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>To-Do App</h2>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
