import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleProp, ViewStyle} from 'react-native';
import {COLORS} from './src/utils/colors';
import Navigation from './src/navigation/Navigation';
import {useLogin} from './src/hooks/useLogin';

function App(): React.JSX.Element {
  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    flex: 1,
  };

  const {getData} = useLogin();

  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, [getData]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
