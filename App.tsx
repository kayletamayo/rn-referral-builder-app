/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppRoutes from './src/navigation';
import { theme } from '@utils/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppRoutes />
    </PaperProvider>
  );
}


export default App;
