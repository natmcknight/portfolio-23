import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CSSTransition } from 'react-transition-group';
import { styled } from '@mui/system';

const TransitionBox = styled(Box)(({ theme }) => ({
  '&.content-enter': {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  '&.content-enter-active': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: `opacity 500ms ${theme.transitions.easing.easeInOut}, transform 500ms ${theme.transitions.easing.easeInOut}`,
  },
  '&.button-enter': {
    opacity: 0,
    transform: 'translateX(-50px)',
  },
  '&.button-enter-active': {
    opacity: 1,
    transform: 'translateX(0)',
    transition: `opacity 500ms ${theme.transitions.easing.easeInOut} 1000ms, transform 500ms ${theme.transitions.easing.easeInOut} 1000ms`,
  },
}));

function HomePanel() {
  const hasProjectDetail = true;
  const theme = useTheme();
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Box sx={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100%', 
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'scroll'
    }}>
      <CSSTransition in={inProp} timeout={500} classNames="content">
        <TransitionBox sx={{
          flexDirection: 'column',
          width: '64%',
        }}>
          {/* Optional Image */}
          <Box sx={{ width: '100%', height: '320px', backgroundColor: theme.palette.background.paper, mb: 4}}>

          </Box>

          {/* Heading */}
          <Typography variant="h2" color="text.light" sx={{ mb: 2 }}>
            Home
          </Typography>

          {/* Body Paragraph(s) */}
          <Typography variant="bodyLarge" color="text.light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </TransitionBox>
      </CSSTransition>

      {/* Optional Button Link */}
      {hasProjectDetail && (
        <CSSTransition in={inProp} timeout={{ enter: 1500, exit: 0 }} classNames="button">
          <TransitionBox 
            component={Button}
            variant="text" 
            endIcon={<ArrowForwardIcon />}
            sx={{
              alignSelf: 'center',
              position: 'absolute',
              right: '64px',
              color: (theme) => theme.palette.text.light,
            }}
          >
            Details
          </TransitionBox>
        </CSSTransition>
      )}
    </Box>
  );
}

export default HomePanel;
