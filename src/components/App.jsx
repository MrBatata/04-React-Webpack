import React from 'react';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';
/**
 * * Styles
 */
// TODO: change to css instead of scss (`sass --watch .\src\styles\sass:.\src\styles\css\`)
import '../styles/sass/App.scss';

/**
 * * Main component
 * @returns {React.component}
 */
function App() {
  return (
    <div>
      <Settings />
      <h1>Mr. Batatas wonderfull App</h1>
      <h3>Bienvenido!</h3>
      <TaskList />
    </div>
  );
}

export default App;
