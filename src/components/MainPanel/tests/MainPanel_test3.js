import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

// Panel components
import HomePanel from '../../routes/HomePanel';
import CaseStudy1 from '../../routes/CaseStudy1';
import CaseStudy2 from '../../routes/CaseStudy2';
import Project1 from '../../routes/Project1';
import Project2 from '../../routes/Project2';
import Project3 from '../../routes/Project3';
import Project4 from '../../routes/Project4';
import Project5 from '../../routes/Project5';
import Project6 from '../../routes/Project6';
import Project7 from '../../routes/Project7';
import ResumePanel from '../../routes/ResumePanel';
import ContactPanel from '../../routes/ContactPanel';

const MainPanel = () => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const panels = [
    <HomePanel />,
    <CaseStudy1 />,
    <CaseStudy2 />,
    <Project1 />,
    <Project2 />,
    <Project3 />,
    <Project4 />,
    <Project5 />,
    <Project6 />,
    <Project7 />,
    <ResumePanel />,
    <ContactPanel />,
  ];

  const panelVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  // Function to handle scroll events
  const handleScroll = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);

    if (e.deltaY > 0 && currentPanelIndex < panels.length - 1) {
      setCurrentPanelIndex((prevIndex) => prevIndex + 1);
    } else if (e.deltaY < 0 && currentPanelIndex > 0) {
      setCurrentPanelIndex((prevIndex) => prevIndex - 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 500); // 500ms debounce time
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentPanelIndex]);

  return (
    <div className="main-panel" onWheel={handleScroll}>
      <AnimatePresence>
        <motion.div
          key={currentPanelIndex}
          variants={panelVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {panels[currentPanelIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainPanel;