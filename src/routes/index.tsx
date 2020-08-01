import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import More from '../pages/More';
import Camera from '../components/Camera';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabApp() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      barStyle={{backgroundColor: '#b9b9b9'}}>
      <Tab.Screen
        component={HomePage}
        name={'HomePage'}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => <Icon name="rss" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        component={Camera}
        name={'instagram'}
        options={{
          tabBarLabel: 'Tirar Foto',
          tabBarIcon: ({color}) => (
            <Icon name="instagram" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        component={More}
        name={'More'}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => (
            <Icon name="more-horizontal" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="TabApp" component={TabApp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
