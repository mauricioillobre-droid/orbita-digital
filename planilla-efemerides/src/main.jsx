import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ConfirmProvider } from './components/ui.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfirmProvider>
      <App />
    </ConfirmProvider>
  </React.StrictMode>
);
