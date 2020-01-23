import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountSceen';
import CourseScreen from '../screens/CourseScreen';

import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

class Home1Screen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>     
        </View>
        
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }

const AuthenticationNavigator = createBottomTabNavigator(
  {
      Home: { screen: Home1Screen },
      'Học tập': { screen: CourseScreen },
      'Cùng bạn': { screen: SettingsScreen },
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
          else if(routeName === 'Cùng bạn') {
            iconName = 'people';
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