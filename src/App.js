import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useMode, ColorModeContext } from './theme/theme';
import Menu from './components/Menu/Menu';
import SecondaryMenu from './components/SecondaryMenu/SecondaryMenu';
import MainPanel from './components/MainPanel/MainPanel';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        <HashRouter>
          <Grid container>
              <Box sx={{ 
                width: 432,
                backgroundColor: theme.palette.common.white, 
              }}>
                <Menu />
              </Box>
              <Grid item xs>
                <SecondaryMenu />
                <MainPanel />
              </Grid>
          </Grid>
        </HashRouter>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
