import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../StartUppage/SignUp';
import Home from '../screens/Home'
import About from '../screens/About'
import Donation from '../screens/Donation';
import BloodInfo from '../screens/BloodInfo';
import AGroup from '../BloodGroups/Agroup'
import BGroup from '../BloodGroups/Bgroup'
import ABGroup from '../BloodGroups/ABgroup'
import OGroup from '../BloodGroups/Ogroup'


const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Donation" component={Donation} />
        <Stack.Screen name="BloodInfo" component={BloodInfo} />
        <Stack.Screen name="AGroup" component={AGroup} />
        <Stack.Screen name="BGroup" component={BGroup} />
        <Stack.Screen name="ABGroup" component={ABGroup} />
        <Stack.Screen name="OGroup" component={OGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;