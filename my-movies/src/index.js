import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);

