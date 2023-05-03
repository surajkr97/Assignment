import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { App2 } from './App';
import Resume from './MyComponents/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <App2 />
    <Resume />
  </>
);