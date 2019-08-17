import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import { theme } from './assets/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>hello pudela app</div>
      </>
    </ThemeProvider>
  );
};

export default App;
