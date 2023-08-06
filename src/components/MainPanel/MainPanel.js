import React from 'react';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

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

function MainPanel() {

  const panelsOrder = [
    { name: 'HomePanel', path: '/home' },
    { name: 'CaseStudy1', path: '/case-study1' },
    { name: 'CaseStudy2', path: '/case-study2' },
    { name: 'Project1', path: '/project1' },
    { name: 'Project2', path: '/project2' },
    { name: 'Project3', path: '/project3' },
    { name: 'Project4', path: '/project4' },
    { name: 'Project5', path: '/project5' },
    { name: 'Project6', path: '/project6' },
    { name: 'Project7', path: '/project7' },
    { name: 'ResumePanel', path: '/resume' },
    { name: 'ContactPanel', path: '/contact' },
  ];

  // Mapping panel names to components
  const panelComponents = {
    HomePanel: <HomePanel />,
    CaseStudy1: <CaseStudy1 />,
    CaseStudy2: <CaseStudy2 />,
    Project1: <Project1 />,
    Project2: <Project2 />,
    Project3: <Project3 />,
    Project4: <Project4 />,
    Project5: <Project5 />,
    Project6: <Project6 />,
    Project7: <Project7 />,
    ResumePanel: <ResumePanel />,
    ContactPanel: <ContactPanel />,
  };

  const [activePanelIndex, setActivePanelIndex] = useState(0);

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    let nextIndex = activePanelIndex + direction;

    // Ensure that nextIndex is within bounds
    if (nextIndex < 0) {
      nextIndex = 0;
    } else if (nextIndex >= panelsOrder.length) {
      nextIndex = panelsOrder.length - 1;
    }

    setActivePanelIndex(nextIndex);
  };

  // Debounce function to control the firing rate of the scroll event
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 10); // Adjust the delay as needed

    const mainPanel = document.querySelector('.main-panel');
    mainPanel.addEventListener('wheel', debouncedHandleScroll);

    return () => mainPanel.removeEventListener('wheel', debouncedHandleScroll);
  }, [activePanelIndex]);

  const transitions = useTransition(activePanelIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    keys: activePanelIndex,
    trail: 10, // Added trail property to create overlap between transitions
  });

  return (
    <Box className="main-panel" sx={{ 
      width: '100%',
      height: '100vh',
      overflowY: 'hidden',
      position: 'relative'
    }}>
      {transitions((style) => { // Removed index from the parameters
        console.log("Rendering panel with index:", activePanelIndex);
        return (
          <animated.div style={style}>
            {panelComponents[panelsOrder[activePanelIndex].name]}
          </animated.div>
        );
      })}
    </Box>
  );   
}

export default MainPanel;
