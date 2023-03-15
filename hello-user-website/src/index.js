import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './script.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);