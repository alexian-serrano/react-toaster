import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import ToastProvider from './ToastProvider/ToastProvider';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
