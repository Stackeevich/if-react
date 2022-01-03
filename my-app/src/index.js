import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line import/extensions
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
