import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

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
  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <HomePanel />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <CaseStudy1 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <CaseStudy2 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project1 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project2 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project3 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project4 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project5 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project6 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <div style={{ opacity: progress }}>
            <Project7 />
          </div>
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <ResumePanel />
        )}
      </Scene>
      <Scene triggerHook="onLeave" duration={500}>
        {(progress) => (
          <ContactPanel />
        )}
      </Scene>
    </Controller>
  );
};

export default MainPanel;