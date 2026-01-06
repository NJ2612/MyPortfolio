import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader/Loader';
import Home from './pages/Home';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
