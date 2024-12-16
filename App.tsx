import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Login from './src/screens/Login/Login';
import {COLORS} from './src/utils/colors';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: COLORS.BLUE,
    height: '100%',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer children={undefined} />
      <Login />
    </SafeAreaView>
  );
}

export default App;
