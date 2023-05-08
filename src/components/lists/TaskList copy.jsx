import React, { useState } from 'react';
import useList from '../../hooks/useList';

function TaskList({ initialValues = ['Ejemplo 1', 'Ejemplo 2'] }) {
  // const tasks = useList(initialValues);
  // tasks.values/pushTask/removeTask/isEmpty
  const {
    values, pushTask, removeTask, isEmpty,
  } = useList(initialValues);

  const [newTask, setNewTask] = useState('');
  // TODO: `tasks` should persist in localStorage

  /**
   * New task -> creation
   */
  const handleAddNewTask = (event) => {
    event.preventDefault();
    pushTask(newTask);
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
      {/* <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          placeholder="Nueva tarea"
          type="text"
          onChange={handleInputChange}
        /> */}
      <div>
        <input
          value={newTask}
          placeholder="Nueva tarea"
          type="text"
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={handleAddNewTask}
        >
          Crear tarea
        </button>
      </div>
      {isEmpty()
        ? (<p>No hay tareas pendientes.</p>)
        : (
          <ul>
            {
              values.map((task, index) => (
                <li key={index}>
                  {`#${index} - ${task}`}
                  <i
                    className="bi bi-trash-fill remove-button"
                    aria-hidden="true"
                    onClick={() => removeTask(index)}
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
