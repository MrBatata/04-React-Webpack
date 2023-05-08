import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/**
 * * Styles
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/css/index.css';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el Middleware de Redux Saga

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
