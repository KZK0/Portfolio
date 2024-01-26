import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './pages/home/home.jsx';
import { Project } from './pages/project/project.jsx';
import './styles/style.css'


const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
  </div>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
