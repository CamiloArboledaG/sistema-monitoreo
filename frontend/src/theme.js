// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Ajusta este color según tus necesidades
    },
    secondary: {
      main: '#dc004e', // Ajusta este color según tus necesidades
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 8,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
        cell: {
          color: '#000',
        },
        columnHeaders: {
          backgroundColor: '#1976d2',
          color: '#fff',
        },
      },
    },
  },
});

export default theme;
