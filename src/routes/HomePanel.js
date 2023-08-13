import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HomePanel() {
  const hasProjectDetail = true;
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
        <Typography variant="h2" color="text.light" sx={{ mb: 2 }}>
          Home
        </Typography>

        {/* Body Paragraph(s) */}
        <Typography variant="bodyLarge" color="text.light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna.
        </Typography>
      </Box>

      {/* Optional Button Link */}
      {hasProjectDetail && (
        <Button 
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
        </Button>
      )}
    </Box>
  );
}

export default HomePanel;