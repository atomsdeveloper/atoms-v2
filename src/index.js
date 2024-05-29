import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './styles/globals-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { Provider } from 'react-redux';
import store from './redux/store';

import { Home } from './template/app/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />

      </Provider>

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
