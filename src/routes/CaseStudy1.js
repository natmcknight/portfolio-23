import { Box, Typography } from '@mui/material';

function CaseStudy1() {
  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100%', 
      backgroundColor: 'blue', // Temporary color for visibility
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}> 
      {/* Heading */}
      <Typography variant="h2">
        CaseStudy1
      </Typography>
    </Box>
  );
}

export default CaseStudy1;
