import React, { useEffect, useState } from 'react';
import './Todo.css';

function Todo() {
  let [show, setValue] = useState({ input: '' });

  let [todolist, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todolist")) || [];
  });

  let [completedTask, setCompleteTask] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTask));
  }, [completedTask]);

  function handleChange(e) {
    let { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function AddData() {
    if (show.input.trim() !== '') {
      const newTask = { id: Date.now(), text: show.input };
      setTodoList((prev) => [...prev, newTask]);
      setValue({ input: '' });
    }
  }

  function DeleteTask(taskId) {
    setTodoList((prev) => prev.filter((task) => task.id !== taskId));
    setCompleteTask((prev) => prev.filter((id) => id !== taskId)); // Remove completed status
  }

  function CompleteTask(taskId) {
    setCompleteTask((prev) => [...prev, taskId]);
  }

  return (
    <div className="todo-container">
      <h3 style={{ color: 'black' }}>Todo List Using Local Storage</h3>
      <div className="input-container">
        <input
          type="text"
          name="input"
          value={show.input}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button onClick={AddData}>Add</button>
      </div>
      <table>
        <thead>
          <tr style={{ color: 'black' }}>
            <th>Task</th>
            <th>Action</th>
            <th>Complete Task</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((task) => (
            <tr
              key={task.id}
              style={{
                color: 'black',
                backgroundColor: completedTask.includes(task.id) ? 'lightgreen' : 'transparent',
              }}
            >
              <td>{task.text}</td>
              <td>
                <button className="delete-btn" onClick={() => DeleteTask(task.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => CompleteTask(task.id)}>Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
