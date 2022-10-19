import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#008080',
    light: '#008080',
    dark: '#321321',
    contrastText: '#',
  },
  text: {
    primary: '#000777',
    secondary: '#008080',
  },
};

export const theme = createTheme({
  palette,
  components: {},
});

export type AppTheme = typeof theme;
