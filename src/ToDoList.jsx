import React, { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) { 
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button> 
            <button className="move-up-button" onClick={() => moveTaskUp(index)}>
              Move Up
            </button> 
            <button className="move-down-button" onClick={() => moveTaskDown(index)}>
              Move Down   
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;