import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { theme } from './src/global/styles/theme';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar translucent />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1; 
  
`
