// src/theme.ts
import { Theme, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },
  },
});

export default theme;
