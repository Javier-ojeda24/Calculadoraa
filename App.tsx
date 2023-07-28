import React from 'react';
import {CalculadoraScrenn} from './src/screens/CalculadoraScrenn';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScrenn />
    </SafeAreaView>
  );
};

export default App;
