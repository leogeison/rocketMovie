import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from './pages/Profile/index.jsx';
import { ThemeProvider } from 'styled-components';
import Globalstyle from './styles/global.js';

import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
);
