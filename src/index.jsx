// Importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Imports de Redux/Providers
// import { Provider } from 'react-redux';

// * Importamos elementos Redux
// ...

// * Importamos componente principal
import App from './components/App';

// * Importamos hojas de estilo (SCSS / SASS / CSS)
// .... Bootstrap iría aquí
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/css/index.css';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el Middleware de Redux Saga

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
