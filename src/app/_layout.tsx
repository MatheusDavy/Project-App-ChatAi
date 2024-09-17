import { useEffect } from 'react';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

import { useColorScheme } from '@/src/hooks/useColorScheme';

import { Slot } from 'expo-router';

import 'react-native-reanimated';
import { Toast } from '../components/Toast';
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Provider store={store}>
        <Slot />

        <Toast />
      </Provider>
    </ThemeProvider>
  );
}
