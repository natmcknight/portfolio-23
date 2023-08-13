import React from 'react';
import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

// Panel components
import HomePanel from '../../../routes/HomePanel';
import CaseStudy1 from '../../../routes/CaseStudy1';
import CaseStudy2 from '../../../routes/CaseStudy2';
import Project1 from '../../../routes/Project1';
import Project2 from '../../../routes/Project2';
import Project3 from '../../../routes/Project3';
import Project4 from '../../../routes/Project4';
import Project5 from '../../../routes/Project5';
import Project6 from '../../../routes/Project6';
import Project7 from '../../../routes/Project7';
import ResumePanel from '../../../routes/ResumePanel';
import ContactPanel from '../../../routes/ContactPanel';

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
  const [activePanel, setActivePanel] = useState({ name: 'HomePanel' });
  const navigate = useNavigate();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    let timerId = null; // Define a variable to hold the timer ID

    const handleScroll = (e) => {
      // Clear any existing timer
      if (timerId !== null) clearTimeout(timerId);

      // Set a new timer
      timerId = setTimeout(() => {
        const currentScrollTop = e.target.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          navigateToPanel('next');
        } else if (currentScrollTop < lastScrollTop) {
          navigateToPanel('prev');
        }
        setLastScrollTop(currentScrollTop);
      }, 150); // 150ms delay
    };

    // Add the scroll event listener
    document.querySelector('.main-panel').addEventListener('scroll', handleScroll);

    // Remove the listener when the component unmounts
    return () => {
      document.querySelector('.main-panel').removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navigateToPanel = (direction) => {
    const currentIndex = panelsOrder.findIndex((panel) => panel.name === activePanel.name);
    let nextIndex = currentIndex;
  
    if (direction === 'next' && currentIndex < panelsOrder.length - 1) {
      nextIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
      nextIndex--;
    }
  
    const nextPanel = panelsOrder[nextIndex];
    setActivePanel(nextPanel); // Set the entire object, not just the name
    navigate(nextPanel.path);
  };  

  const transitions = useTransition(activePanel.name, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Box className="main-panel" sx={{ width: '100%', height: '100vh', overflowY: 'scroll' }}>
    {transitions((style, item) => (
      <animated.div style={style}>
        <Element name="HomePanel" onSetActive={() => setActivePanel({ name: 'HomePanel', path: '/home' })}>
          {item.name === 'HomePanel' && <HomePanel />}
        </Element>
        <Element name="CaseStudy1" onSetActive={() => setActivePanel({ name: 'CaseStudy1', path: '/case-study1' })}>
          {item.name === 'CaseStudy1' && <CaseStudy1 />}
        </Element>
        <Element name="CaseStudy2" onSetActive={() => setActivePanel({ name: 'CaseStudy2', path: '/case-study2' })}>
          {item.name === 'CaseStudy2' && <CaseStudy2 />}
        </Element>
        <Element name="Project1" onSetActive={() => setActivePanel({ name: 'Project1', path: '/project1' })}>
          {item.name === 'Project1' && <Project1 />}
        </Element>
        <Element name="Project2" onSetActive={() => setActivePanel({ name: 'Project2', path: '/project2' })}>
          {item.name === 'Project2' && <Project2 />}
        </Element>
        <Element name="Project3" onSetActive={() => setActivePanel({ name: 'Project3', path: '/project3' })}>
          {item.name === 'Project3' && <Project3 />}
        </Element>
        <Element name="Project4" onSetActive={() => setActivePanel({ name: 'Project4', path: '/project4' })}>
          {item.name === 'Project4' && <Project4 />}
        </Element>
        <Element name="Project5" onSetActive={() => setActivePanel({ name: 'Project5', path: '/project5' })}>
          {item.name === 'Project5' && <Project5 />}
        </Element>
        <Element name="Project6" onSetActive={() => setActivePanel({ name: 'Project6', path: '/project6' })}>
          {item.name === 'Project6' && <Project6 />}
        </Element>
        <Element name="Project7" onSetActive={() => setActivePanel({ name: 'Project7', path: '/project7' })}>
          {item.name === 'Project7' && <Project7 />}
        </Element>
        <Element name="ResumePanel" onSetActive={() => setActivePanel({ name: 'ResumePanel', path: '/resume' })}>
          {item.name === 'ResumePanel' && <ResumePanel />}
        </Element>
        <Element name="ContactPanel" onSetActive={() => setActivePanel({ name: 'ContactPanel', path: '/contact' })}>
          {item.name === 'ContactPanel' && <ContactPanel />}
        </Element>
      </animated.div>
    ))}
  </Box>
  );
}

export default MainPanel;
