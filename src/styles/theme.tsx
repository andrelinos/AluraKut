import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// const fonts = { mono: '\'Menlo\', monospace' };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    black: '#16161D',
    blue: {
      500: '#308bc5',
      700: '#5579a1',
    },
  },
  fonts: {
    heading: 'Rubik',
    body: 'Rubik',
  },
  breakpoints,
});

export default theme;
