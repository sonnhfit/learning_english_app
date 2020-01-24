import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountSceen';
import CourseScreen from '../screens/CourseScreen';
import TestScreen from '../screens/TestScreen';

import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


const AuthenticationNavigator = createBottomTabNavigator(
  {
      Home: { screen: HomeScreen },
      'Học tập': { screen: CourseScreen },
      'Kiểm tra': { screen: TestScreen },
      'Tài khoản': { screen: AccountScreen },
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
              iconName = 'home';
          }else if(routeName === 'Học tập') {
              iconName = 'school';
          }
          else if(routeName === 'Kiểm tra') {
            iconName = 'book';
          }
          else if(routeName === 'Tài khoản') {
            iconName = 'account-circle';
          }
          console.log('icon name la=: ', iconName);
          console.log();
          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
);

const AppStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    HomeScreen: AuthenticationNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
  }
);
export default createAppContainer(AppStack);