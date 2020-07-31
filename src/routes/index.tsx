import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import More from '../pages/More';

const App = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator initialRouteName="Login">
      <App.Screen name="Login" component={Login} />
      <App.Screen
        name="HomePage"
        component={HomePage}
        options={{title: 'Feed'}}
      />
      <App.Screen
        name="Camera"
        component={More}
        options={{title: 'Tirar Foto'}}
      />
      <App.Screen name="More" component={More} options={{title: 'Mais'}} />
    </App.Navigator>
  );
};

export default Routes;
