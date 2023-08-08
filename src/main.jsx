import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Globalstyle from './styles/global.js';
import theme from './styles/theme.js';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
