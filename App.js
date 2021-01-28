import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import MoreInfoScreen from './src/screens/MoreInfoScreen';
import OtherOptionsScreen from './src/screens/OtherOptionsScreen';
import { Provider } from './src/context/DontCareWhereContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurants: RestaurantsScreen,
    More: MoreInfoScreen,
    Other: OtherOptionsScreen,
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
