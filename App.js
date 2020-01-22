/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {PureComponent} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import NavigationService from './src/services/NavigationService';



export default class App extends PureComponent {
  render() {
    return (
      <AppNavigation 
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
             }}
           />
    );
  }
}

