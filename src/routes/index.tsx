import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import More from '../pages/More';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabApp() {
  return (
    <Tab.Navigator initialRouteName="HomePage">
      <Tab.Screen component={HomePage} name={'HomePage'} />
      <Tab.Screen component={More} name={'More'} />
      <Tab.Screen component={More} name={'More'} />
    </Tab.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabApp" component={TabApp} />
    </Stack.Navigator>
  );
};

export default Routes;
