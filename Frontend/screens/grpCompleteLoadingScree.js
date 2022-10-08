import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FindloadingScreen from './loadingScreen/findPassengerLoading_screen'
import LottieView from 'lottie-react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import PassengerList from './passenger_list';
import GrpLoading from './loadingScreen/grpLoadingScree';

const GrpComplete = ({ navigation }) => {

  const { height } = useWindowDimensions();

  const onTouch = () => {
    navigation.navigate(PassengerList)
  }

  const onBack = () => {
    navigation.pop()
  }


  return (

    <SafeAreaView style={{ backgroundColor: 'white' }}>

      <View style={[styles.header, { height: height * 0.07 }]}>
        <TouchableOpacity onPress={onBack}>
          {/*  <Ionicons style={styles.icon} name="chevron-back-outline" size={24} color="white" /> */}
        </TouchableOpacity>

        <Text style={[{ fontSize: 20, }]}>Group Created</Text>
        <TouchableOpacity>
          <Ionicons name="ios-arrow-up-sharp" size={24} color="white" />
        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={onTouch}>


        <GrpLoading />

      </TouchableOpacity>
      <View style={styles.loadingScreenInfo}>
        <Text style={{ fontSize: 20 }}>Congratulations!!</Text>
        <Text style={{ opacity: 0.5 }}>Group created succesfully</Text>
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({


  header: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    marginHorizontal: '7%',
    color: 'black'
  },

  loadingScreenInfo: {
    marginTop: -200,
    alignItems: 'center'
  }
});
export default GrpComplete
