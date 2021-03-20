import 'react-native-gesture-handler';
import React from 'react';
/* import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ColorsConfig from './config/colorsConfig';
import './config/statusBarConfig';
import Login from './pages/login/';
import HomePage from './pages/homePage';


const Routes = createAppContainer(createStackNavigator({
  Login,
  HomePage,
},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: '',
    headerLeft: () => null,
    headerStyle: {
        backgroundColor: ColorsConfig.root.colorPrimary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
    }
  }
}));

export default Routes;