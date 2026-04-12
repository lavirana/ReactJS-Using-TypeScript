import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<h1>Hello from react typescript</h1>
<App></App>
  </React.StrictMode>
);
