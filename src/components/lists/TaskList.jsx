import React, { useState } from 'react';

function TaskList() {
  const [newTask, setNewTask] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [taskList, setTaskList] = useState(['sdasd']);

  const isTasksEmpty = () => taskList.length === 0;

  /**
   * Adds a new task to taskList, defined in newTask
   * @returns {array} a new taskList with old values plus newTask
   * Then newTask is set to ''
   */
  const handleAddNewTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask('');
  };

  /**
   * Removes a specific task from taskList
   * @param {number} index index from taskList.map()
   * @returns {array}
   */
  const handleRemoveTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  return (
    <>
      <div>
        <h4>
          Lista de tareas
        </h4>
      </div>
      <div>
        <input
          value={newTask}
          placeholder="Nueva tarea"
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="button"
          onClick={() => handleAddNewTask()}
        >
          Crear tarea
        </button>
      </div>
      {isTasksEmpty()
        ? (<p>No hay tareas pendientes.</p>)
        : (
          <ul>
            {
              taskList.map((task, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={false}
                  />
                  {`#${index} - ${task}`}
                  <i
                    className="bi bi-trash-fill remove-button"
                    aria-hidden="true"
                    onClick={() => handleRemoveTask(index)}
                  />
                </li>
              ))
            }
          </ul>
        )}
    </>
  );
}

export default TaskList;
