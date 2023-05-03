import React, { useState } from 'react';
import useList from '../../hooks/useList';

function TaskList() {
  const tasks = useList(['Ejemplo 1', 'Ejemplo 2']);
  const [newTask, setNewTask] = useState('');
  // TODO: `tasks` should persist in localStorage

  // New task -> creation
  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.pushTask(newTask);
    setNewTask('');
  };

  // New task -> value from input
  const handleInputChange = (event) => {
    // TODO: useRef solution is better
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h4>
        Lista de tareas
      </h4>
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
              tasks.value.map((task, index) => (
                <li key={index}>
                  {`#${index} - ${task}`}
                  <i
                    className="bi bi-trash-fill"
                    aria-hidden="true"
                    onClick={() => tasks.removeTask(index)}
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
