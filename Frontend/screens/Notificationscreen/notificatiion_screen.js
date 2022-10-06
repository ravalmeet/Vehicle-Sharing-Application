import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { Ionicons, EvilIcons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import NotificationCard from '../../components/notificationCard/notifcatio_card';


const NotificationScreen = ({ navigation }) => {


  const { height } = useWindowDimensions();

  const onClosePressed = () => {
    navigation.navigate('HomeScreen')
  }


  return (
    <SafeAreaView>
      <View style={[styles.header, { height: height * 0.07 }]}>
        <Ionicons style={styles.icon} name="chevron-back" size={30} color="black" />
        <Text style={[{ fontSize: 20, }]}>Notifications</Text>
        <TouchableOpacity onPress={onClosePressed}>
          <AntDesign style={styles.icon} name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <NotificationCard />
    </SafeAreaView>
  )
}
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

export default NotificationScreen