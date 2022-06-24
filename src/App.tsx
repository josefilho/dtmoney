import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';
import { GlobalStyle, darkTheme, lightTheme } from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={{}}>
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
