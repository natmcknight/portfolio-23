import React, { useState, useEffect } from 'react';
import HomePanel from '../../routes/HomePanel';
import CaseStudy1 from '../../routes/CaseStudy1';
import CaseStudy2 from '../../routes/CaseStudy2';
import './MainPanel.css';


const MainPanel = () => {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [scrollDirection, setScrollDirection] = useState(null);

  const panels = [<HomePanel />, <CaseStudy1 />, <CaseStudy2 />];

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 'down' : 'up';
    setScrollDirection(direction);
  };

  useEffect(() => {
    let timer;
    if (scrollDirection === 'down' && opacity > 0) {
      timer = setInterval(() => {
        setOpacity((prevOpacity) => prevOpacity - 0.1);
      }, 50);
    } else if (scrollDirection === 'up' && opacity < 1) {
      timer = setInterval(() => {
        setOpacity((prevOpacity) => prevOpacity + 0.1);
      }, 50);
    }

    if (opacity === 0 && currentPanelIndex < panels.length - 1) {
      setCurrentPanelIndex((prevIndex) => prevIndex + 1);
      setOpacity(1);
    } else if (opacity === 1 && currentPanelIndex > 0) {
      setCurrentPanelIndex((prevIndex) => prevIndex - 1);
      setOpacity(0);
    }

    return () => clearInterval(timer);
  }, [scrollDirection, opacity, currentPanelIndex]);

  return (
    <div className="main-panel" onWheel={handleScroll}>
      {panels.map((panel, index) => (
        <div
          key={index}
          className="panel"
          style={{
            opacity: index === currentPanelIndex ? opacity : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {panel}
        </div>
      ))}
    </div>
  );
  
};

export default MainPanel;

