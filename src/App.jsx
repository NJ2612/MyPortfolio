import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home key="home" />} />
            <Route path="/projects" element={<ProjectsPage key="projects-page" />} />
            <Route path="/projects/:projectId" element={<ProjectDetail key="project-detail" />} />
            <Route path="*" element={<Home key="fallback-home" />} />
          </Routes>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
