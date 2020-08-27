import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import React from 'react';
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
      <>
        <StatusBar style='dark' backgroundColor='transparent' translucent />
        <Routes/>
      </>
  );
}
