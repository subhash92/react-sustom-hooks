import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import AuthContextProvider from './context/auth-context';

// ReactDOM.render(, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<AuthContextProvider><App /></AuthContextProvider>
)