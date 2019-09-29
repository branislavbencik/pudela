import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import { theme } from './assets/styles/theme';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          heloo layout
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
