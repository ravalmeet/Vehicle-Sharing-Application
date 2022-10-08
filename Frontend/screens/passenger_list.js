import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PassengerCard from '../components/VerificationCard/passenger_card';
import Tab from '../screens/tab'
import { Ionicons, Feather } from '@expo/vector-icons';
import p1Logo from '../images/maleImg.png'
import p2Logo from '../images/FemaleImg.png'
import Constants from "expo-constants";
import Header from '../components/header/header'
import { StatusBar } from "expo-status-bar";
import { set } from 'react-native-reanimated';



const PassengerList = ({ navigation }) => {

  var number = 0;



  const [save, setSave] = useState(false)


  const onConfirmPress = () => {
    navigation.navigate('GrpComplete')
  }

  const onBackPressed = () => {
    navigation.pop()
  }
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header onPressedOp={onConfirmPress} />
      </View>
      <ScrollView>
        {/* if(n == 2) */}
        <PassengerCard mainName={'Raju Sharma'} address={'Sabarmati river front - Sachivalay'} time={'9 : 30'} img={p1Logo} />
        <PassengerCard mainName={'Madhu saini l'} address={'Sidi saiyad mosque - Sachivalay'} time={'9 : 30'} img={p2Logo} />
        <PassengerCard mainName={'kalash thakka'} address={'kakariya - Sachivalay'} time={'10 : 00'} img={p1Logo} />
        <PassengerCard mainName={'Kunal Maurya'} address={'Swaminarayan Mandir - Sachivalay'} time={'9 : 30'} img={p1Logo} />
        <PassengerCard mainName={'Meet Raval'} address={'Airport Road - Sachivalay'} time={'10 : 00'} img={p1Logo} />
        <PassengerCard mainName={'Trisha Dabbawala'} address={'Behram pur police station - Sachivalay'} time={'10: 00'} img={p2Logo} />
        <PassengerCard mainName={'Lucy Bagman'} address={'Behram pur police station- Sachivalay'} time={'10: 00'} img={p2Logo} />
        <PassengerCard mainName={'Megh Mavapuri'} address={'Airport Road - Sachivalay'} time={'10 : 00'} img={p1Logo} />
        <PassengerCard mainName={'Tejas Shah'} address={'Airport Road - Sachivalay'} time={'10 : 00'} img={p1Logo} />

      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  header: {

    position: 'sticky',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5E4E2',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    marginHorizontal: '4%',
    color: 'black'
  },

})
export default PassengerList