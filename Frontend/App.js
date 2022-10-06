import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntoScreen from "./screens/intro_screen";
import HomeScreen from "./screens/home_screen";
import ProfileScreen from "./screens/profile_screen";
import LogScreen from "./screens/AuthScreens/logIn_screen";
import SigninScreen from "./screens/AuthScreens/signIn_screen";
import ForgetpasswordScreen from "./screens/AuthScreens/forgetpassword_screen";
import NewpasswordScreeen from "./screens/AuthScreens/newPassword_screen";
import Tabs from './screens/tab'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import NotificationScreen from "./screens/Notificationscreen/notificatiion_screen";

const Stack = createNativeStackNavigator();

export default function App() {

  /*   const [fontLoaded, setFontLoaded] = useState(false) */

  /*   async function getFonts() {
      await Font.loadAsync({
        "open-sans": require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
      })
    } */


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="IntroScreen"
          component={IntoScreen}
        />
        <Stack.Screen
          name="ProfileSceen"
          component={ProfileScreen}
        />
        <Stack.Screen
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
        />
        <Stack.Screen name="Tab" component={Tabs} />

        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />

      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  )
}



