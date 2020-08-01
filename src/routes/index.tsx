import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import More from '../pages/More';
import Camera from '../components/Camera';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabApp() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      tabBarOptions={{
        activeTintColor: '#000',
        activeBackgroundColor: '#ccffff',
        labelStyle: {
          alignItems: 'center',
          alignContent: 'center',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        component={HomePage}
        name={'HomePage'}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <Icon name="rss" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Camera}
        name={'instagram'}
        options={{
          tabBarLabel: 'Tirar Foto',
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={More}
        name={'More'}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color, size}) => (
            <Icon name="more-horizontal" color={color} size={size} />
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
