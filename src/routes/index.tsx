import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import More from '../pages/More';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#312e38'},
      }}
      initialRouteName="Login">
      <App.Screen name="Login" component={Login} />
      <App.Screen name="HomePage" component={HomePage} />
      <App.Screen name="More" component={More} />
    </App.Navigator>
  );
};

export default AppRoutes;
