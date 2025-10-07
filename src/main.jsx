import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mt-1'>
    <App />
    </div>
  </StrictMode>,
)    
     