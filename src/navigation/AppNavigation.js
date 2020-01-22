import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen }
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
  }
);
export default createAppContainer(AppStack);