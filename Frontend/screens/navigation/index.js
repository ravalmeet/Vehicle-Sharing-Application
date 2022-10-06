import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from '../intro_screen'



const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
        />
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="LogScreen"
          component={LogScreen}
        />
        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
        />
        <Stack.Screen
          name="ForgetpasswordScreen"
          component={ForgetpasswordScreen}
        />
        <Stack.Screen
          name="NewpasswordScreeen"
          component={NewpasswordScreeen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation 