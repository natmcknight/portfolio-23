import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CaseStudy2() {
  const hasProjectDetail = false;
  const theme = useTheme();

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
      <Box sx={{
        flexDirection: 'column',
        width: '64%',
      }}>
        {/* Optional Image */}
        <Box sx={{ width: '100%', height: '320px', backgroundColor: 'grey.300', mb: 4}}>

        </Box>

        {/* Heading */}
        <Typography variant="h2" color="text.primary" sx={{ mb: 2 }}>
          Case Study 2
        </Typography>

        {/* Body Paragraph(s) */}
        <Typography variant="bodyLarge" color="text.primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna.
        </Typography>
      </Box>

    </Box>
  );
}

export default CaseStudy2