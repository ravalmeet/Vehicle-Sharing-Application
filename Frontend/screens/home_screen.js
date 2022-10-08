import React from 'react';
import {
  SafeAreaView, Text, StyleSheet, View, useWindowDimensions, TouchableOpacity
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import VerificationCard from '../components/VerificationCard/verification_card';
import GroupDetail from '../components/grpDetails/grpDetails';
import Tab from '../screens/tab'

const HomeScreen = ({ navigation }) => {

  const { height } = useWindowDimensions();


  const onNotificationPressed = () => {
    navigation.navigate('NotificationScreen')
  }

  return (
    <SafeAreaView>
      <View style={[styles.header, { height: height * 0.07 }]}>
        <EvilIcons style={styles.icon} name="navicon" size={35} color="black" />
        <Text style={[{ fontSize: 20, }]}>Home</Text>
        <TouchableOpacity onPress={onNotificationPressed}>
          <Feather style={styles.icon} name="bell" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <VerificationCard />
      <View style={[{ backgroundColor: '#F5F5F5', width: '100%', height: 30 }]}></View>
      <GroupDetail />

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5E4E2',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    marginHorizontal: '4%',
    color: 'black'
  }
})
export default HomeScreen