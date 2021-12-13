import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App className='homes-guests-loves'/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
