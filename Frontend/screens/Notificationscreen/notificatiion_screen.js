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
        <TouchableOpacity onPress={onClosePressed}>
          <AntDesign style={styles.icon} name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={[{ fontSize: 20, }]}>Notifications</Text>
        <Ionicons style={styles.icon} name="chevron-back" size={30} color="#E5E4E2" />

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
    marginHorizontal: '10%',

  }
})

export default NotificationScreen