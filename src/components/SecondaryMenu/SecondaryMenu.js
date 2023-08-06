import React, { useContext } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { ColorModeContext } from '../../theme/theme';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function SecondaryMenu() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box sx={{
            position: 'fixed',
            top: '32px',
            right: '32px',
            zIndex: '1',
        }}>
            <Button style={{color: theme.palette.text.light}}>Resume</Button>
            <Button style={{color: theme.palette.text.light}}>Contact</Button>
            <IconButton style={{color: theme.palette.background.paper}} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlined />
                ) : (
                    <LightModeOutlined />
                )}
            </IconButton>
        </Box>
    )
}

export default SecondaryMenu;
