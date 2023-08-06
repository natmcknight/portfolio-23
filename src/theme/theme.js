import { createContext, useState, useMemo } from "react";
import { createTheme, alpha } from '@mui/material/styles';

// color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        secondary: {
            10: '#FFDBD9',
            20: '#FFB5B0',
            30: '#FF8E88',
            40: '#FF685F',
            50: '#FF4136',
            60: '#FD0E00',
            70: '#C50B00',
            80: '#8D0800',
            90: '#550500',
            100: '#390300'   
        },
        blue: {
            10: '#D1E4E9',
            20: '#C3DCE2',
            30: '#A8CCD5',
            40: '#8CBCC8',
            50: '#71ACBA',
            60: '#559CAD',
            70: '#427B88',
            80: '#2F5962',
            90: '#1D363D',
            100: '#0B1417',
        },
        neutral: {
            10: '#E4E2E2',
            20: '#D2D0CF',
            30: '#B0ACAB',
            40: '#8D8886',
            50: '#696463',
            60: '#444140',
            70: '#343231',
            80: '#242322',
            90: '#151413',
            100: '#050505',
        }
      }
    : {
        secondary: {
            100: '#FFDBD9',
            90: '#FFB5B0',
            80: '#FF8E88',
            70: '#FF685F',
            60: '#FF4136',
            50: '#FD0E00',
            40: '#C50B00',
            30: '#8D0800',
            20: '#550500',
            10: '#390300'   
        },
        neutral: {
            100: '#E4E2E2',
            90: '#D2D0CF',
            80: '#B0ACAB',
            70: '#8D8886',
            60: '#696463',
            50: '#444140',
            40: '#343231',
            30: '#242322',
            20: '#151413',
            10: '#050505',
        },
        blue: {
            100: '#D1E4E9',
            90: '#C3DCE2',
            80: '#A8CCD5',
            70: '#8CBCC8',
            60: '#71ACBA',
            50: '#559CAD',
            40: '#427B88',
            30: '#2F5962',
            20: '#1D363D',
            10: '#0B1417',
        }
      }
  )
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
                main: colors.blue[20],
                dark: colors.blue[10],
                light: colors.blue[90],
            },
            secondary: {
                main: colors.neutral[100],
                dark: colors.secondary[100],
                light: colors.secondary[90],
            },
            background: {
                default: colors.neutral[100],
                paper: "#1E1E24",
            },
            text: {
                primary: colors.neutral[20],
                secondary: colors.neutral[50],
                disabled: colors.neutral[70],
                light: colors.neutral[40],
                label: colors.neutral[40]
            },
            divider: alpha(colors.neutral[20], 0.5),
            common: {
                white: "#1E1E24",
            }
        } : {
            primary: {
                main: colors.blue[50],
                dark: colors.blue[10],
                light: colors.blue[90],
            },
            secondary: {
                main: colors.secondary[50],
                dark: colors.secondary[10],
                light: colors.secondary[90],
            },
            background: {
                default: colors.neutral[10],
                paper: colors.neutral[100],
            },
            text: {
                primary: colors.neutral[10],
                secondary: colors.neutral[50],
                disabled: colors.neutral[70],
                light: colors.neutral[100],
                label: colors.neutral[70],
            },
            divider: alpha(colors.neutral[80], 0.5),
        }),
    },
    typography: {
        fontFamily: ['"Source Sans Pro", "Raleway"'].join(','),

        h1: {
            fontFamily: ["Playfair Display"],
            fontWeight: 400,
        },
        h2: {
            fontFamily: ["Playfair Display"],
            fontWeight: 400,
        },
        h3: {
            fontFamily: ["Playfair Display"],
            fontWeight: 300,
        },
        h4: {
            fontFamily: ["Raleway"],
            fontWeight: 500,
        },
        h5: {
            fontFamily: ["Raleway"],
            fontWeight: 700,
        },
        bodyLarge: {
            fontFamily: ["Raleway"],
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: '2rem',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 700,
                    padding: '8px 16px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1400,
        },
    },
    props: {
      // Define props
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode)),
    [mode],
  );

  return { theme, colorMode };
};
