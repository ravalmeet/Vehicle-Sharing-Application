import { View, Text, StyleSheet, useRef, Button } from 'react-native'
import React from 'react'
import LoadingAnimation from '../../components/json/loadingScreen.json'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';


const FindloadingScreen = () => {


  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay loop
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover'
          }}

          source={require('../../components/json/loadingScreen.json')}
        />
      </View>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  animationContainer: {
    height: 500,
    marginTop: 150,
    alignItems: 'center',
    resizeMode: 'cover',
  },

});

export default FindloadingScreen