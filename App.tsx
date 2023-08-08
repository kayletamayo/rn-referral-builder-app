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
import { ReferralProvider } from '@app/context/referralContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <ReferralProvider>
      <PaperProvider theme={theme}>
        <AppRoutes />
        <Toast />
      </PaperProvider>
    </ReferralProvider>
  );
}


export default App;
