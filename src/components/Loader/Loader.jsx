import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const logs = [
  "Initializing core systems...",
  "Loading neural configurations...",
  "Verifying data integrity...",
  "Connecting logic gateways...",
  "Optimizing performance...",
  "Rendering interface...",
  "System Ready."
];

const Loader = ({ onComplete }) => {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Log interval
    const logInterval = setInterval(() => {
      setCurrentLog(prev => {
        if (prev < logs.length - 1) return prev + 1;
        return prev;
      });
    }, 500);

    // Progress bar simulation (non-linear)
    const timeouts = [
      setTimeout(() => setProgress(15), 200),
      setTimeout(() => setProgress(45), 800),
      setTimeout(() => setProgress(70), 1600),
      setTimeout(() => setProgress(90), 2400),
      setTimeout(() => setProgress(100), 3200),
    ];

    const complTimeout = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearInterval(logInterval);
      timeouts.forEach(clearTimeout);
      clearTimeout(complTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <div className="terminal-window">
          {logs.slice(0, currentLog + 1).map((log, index) => (
            <div key={index} className="log-entry">
              <span className="prompt">{`>`}</span>
              <span className={`log-text ${index === logs.length - 1 ? 'highlight' : ''}`}>
                {log}
              </span>
            </div>
          ))}
          <span className="cursor">_</span>
        </div>

        <div className="progress-bar-container">
          <motion.div 
            className="progress-bar" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        
        <div className="loader-meta">
          <span>MEM: OK</span>
          <span>SYS: ONLINE</span>
          <span>SECURE_CONN: TRUE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
