'use client';

import { generateColors } from '@mantine/colors-generator';
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: generateColors('#f6a6a7'),
  },
  primaryShade: 3,
});
