import React, { useState } from 'react';
import useList from '../../hooks/useList';

function TaskList() {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState('');

  // New task -> creation
  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask('');
  };

  // New task -> value from input
  const handleInputChange = (event) => {
    // TODO: useRef solution is better
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>
        Lista de tareas
      </h1>
      <form
        onSubmit={handleSubmit}
      >
        <input
          value={newTask}
          placeholder="Nueva tarea"
          type="text"
          onChange={handleInputChange}
        />
        <button
          type="submit"
        >
          Crear tarea
        </button>
      </form>
      {tasks.isEmpty()
        ? (<p>No hay tareas pendientes.</p>)
        : (
          <ul>
            {
              tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <input
                    type="checkbox"
                    onClick={() => task.remove(index)}
                  />
                </li>
              ))
            }
          </ul>
        )}
    </div>
  );
}

export default TaskList;
