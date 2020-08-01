import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {View, StatusBar} from 'react-native';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#d3d3d3" />
      <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
        <Routes />
      </View>
    </NavigationContainer>
  </>
);

export default App;
