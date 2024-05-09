import React, { Fragment } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/config/theme/gluestack';

import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import Routes from '@/routes';
import { AuthContextProvider } from '@/context/AuthContext';
import { AcademyContextProvider } from '@/context/AcademyContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    RobotoMono_Regular: require('@/assets/fonts/RobotoMono.ttf'),
  });

  React.useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Fragment>
      {fontsLoaded && (
        <GluestackUIProvider config={config}>
          <AuthContextProvider>
            <AcademyContextProvider>
              <Routes />
            </AcademyContextProvider>
          </AuthContextProvider>
        </GluestackUIProvider>
      )}
    </Fragment>
  );
}
