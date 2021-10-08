import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from './context';

import theme from './global/styles';

import Routes from './routes';

export default function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
