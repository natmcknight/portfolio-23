import React, { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { List, ListItemText, Box, Button, Typography, useMediaQuery, Drawer, IconButton, useScrollTrigger, Fade  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import brandImage from '../../assets/images/brandImage.png';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 432,
      height: '100vh',
      overflow: 'auto',
    },
    mobileRoot: {
      width: '100%',
      height: '100vh',
      overflow: 'auto',
    },
    imageContainer: {
      position: 'relative', // Add this line
      height: '384px',
    },
    menu: {
      // Add menu styles
    },
    menuButton: {
      position: 'fixed',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
    indicator: {
      position: 'absolute',
      left: 0,
    },
  }));

  const panelPaths = {
    'Penn Foster: Integrated, Data-Driven Design': '/case-study1',
    'Resume': '/resume',
    // Add more mappings for other items
  };

function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenuItemClick = (index) => {
        setActiveItem(index);
    };

    const menuItems = [
      { label: 'Case Studies', items: ['Penn Foster: Integrated, Data-Driven Design', 'College Board: An Enterprise UX Architecure'] },
      { label: 'Projects', items: ['Student Center Dashboard', 'Apricot UI System', 'DMG Enterprise Applications', 'College Board: Score Reporting', 'SAT Practice', 'Power PAL & Learning', 'The Days of Yore' ] },
      { label: 'About Me', items: ['Resume', 'Contact'] },

    ];

    return (
        <>
        {isMobile ? (
            <>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    sx={{
                    overflowY: "auto",
                    padding: "0 88px",
                    height: "100vh",
                    }}
                >
                    {menuItems.map((group, groupIndex) => (
                        <Box key={groupIndex}>
                           
                            {group.items.map((item, itemIndex) => (
                            <Link to={panelPaths[item]} key={item + itemIndex}> {/* Unique key here */}
                                <ListItemText primary={item} />
                            </Link>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Drawer>
            </>
        ) : (
            <Box sx={{
                backgroundColor: 'common.white',
            }}>
                {/* Image Area */}
                <Box className={classes.imageContainer}>
                    <Box sx={{
                        position: 'absolute',
                        top: '32px',
                        left: '32px',
                    }}>
                        <img src={logo} alt="Logo" />
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        top: '88px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                        <img src={brandImage} alt="Brand" />
                    </Box>
                </Box>

                {/* Menu Area */}


                <Box sx={{
                    overflowY: 'auto',
                    padding: '0 88px',
                    height: 'calc(100vh - 384px)', // Subtract the height of the imageContainer
                }}>
                    {menuItems.map((group, groupIndex) => (
                        <Box key={groupIndex}>
                            <Box sx={{ paddingTop: '16px'}}>
                                <Typography variant="overline" fontWeight={500} gutterBottom sx={{
                                    color: 'text.label',
                                }}>
                                    {group.label}
                                </Typography>
                            </Box>
                            <List>
                                {group.items.map((item, itemIndex) => (
                                    <Link to={panelPaths[item]} key={item + itemIndex}>
                                        <Button
                                            key={item + itemIndex}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                textTransform: 'none',
                                                color: 'text.primary',
                                            }}
                                        fullWidth
                                        >
                                        <ListItemText primary={<Typography align="left">{item}</Typography>} /> 
                                        </Button>
                                    </Link>
                                ))}
                            </List>
                            <Divider sx={{ mt: 4 }} />
                        </Box>
                    ))}
                </Box>
            </Box>
        )}
        </>
    );
}

export default Menu;
