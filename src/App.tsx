import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {View, StatusBar} from 'react-native';
import Routes from './routes';
import HomePage from './pages/HomePage';
import More from './pages/More';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{flex: 1, backgroundColor: '#312e38'}}>
        <HomePage />
      </View>
    </NavigationContainer>
  </>
);

export default App;
