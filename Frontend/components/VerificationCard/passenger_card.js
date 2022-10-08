import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, Image, Touchable, state } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { onChange } from 'react-native-reanimated';


const PassengerCard = ({ mainName, address, time, img }) => {


  const [isChecked, setChecked] = useState(false)

  const { height } = useWindowDimensions();




  return (

    <SafeAreaView style={styles.root} >
      <View style={[styles.pCard, { height: height * 0.11 }]} >
        <View style={styles.imgCotainer}>
          <Image source={img} style={[styles.imgLogo, { resizeMode: 'contain' }]} />
        </View>
        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{mainName}</Text>
            <Text style={styles.add}>{address}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </View>
        </View>

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    left: 235,
    marginTop: -55,
  },


  name: {
    fontSize: 16,
    marginTop: '10%',
    fontWeight: '500'
  },
  time: {
    marginLeft: 0,
  },
  add: {
    marginTop: 3,

  },
  infoContainer: {
    left: 20,
  },


  pCard: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#E5E4E2',
    borderRadius: 15,
    flexDirection: 'row',
  },

  imgLogo: {
    marginLeft: 18,
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: 'red',
    width: 50,
    height: 50,
  }

})

export default PassengerCard