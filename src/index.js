import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RowDataProvider } from './TableDataContext/tableDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RowDataProvider>
      <App />
    </RowDataProvider>
  </React.StrictMode>
);
