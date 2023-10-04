import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['IBM Plex Mono', 'serif'].join(','),

    p: {
      fontFamily: 'IBM Plex Mono',
    },
    h1: {
      fontFamily: 'IBM Plex Serif',
    },
    h2: {
      fontFamily: 'IBM Plex Serif',
    },
    h3: {
      fontFamily: 'IBM Plex Serif',
    },
    h4: {
      fontFamily: 'IBM Plex Serif',
    },
    h5: {
      fontFamily: 'IBM Plex Serif',
    },
    h6: {
      fontFamily: 'IBM Plex Serif',
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'IBM Plex Mono',
          fontSize: '1rem',
        },
      },
    },
  },
});
