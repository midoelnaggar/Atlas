import React from 'react';
import { Text } from 'native-base';
import AppLoading from 'expo-app-loading';
import { useFonts, Tajawal_500Medium } from '@expo-google-fonts/tajawal';

export default function App(props) {
  let [fontsLoaded] = useFonts({
    Tajawal_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <Text style={{ fontFamily: 'Tajawal_500Medium'}} {...props}>{props.children}</Text>
    );
  }
}