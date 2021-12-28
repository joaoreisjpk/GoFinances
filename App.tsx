import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Welcome from './src/screens/Dashboard';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}
