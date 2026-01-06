import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/Timeline/Timeline';

import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />

      <Contact />
    </motion.div>
  );
};

export default Home;
