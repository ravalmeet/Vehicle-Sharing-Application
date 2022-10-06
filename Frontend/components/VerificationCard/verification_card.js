import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Vcard from '../../images/IDcard.png'
import VerifyButton from '../customButton/customVerify_button'

const VerificationCard = () => {


  const onVerifiedPressed = () => {
    console.warn('verified')
  }

  const { height } = useWindowDimensions();

  return (
    <View style={[styles.Card, { height: height * 0.25 }]}>
      <View style={styles.left_side}>
        <Image source={Vcard} style={[styles.vCard, {/*  height: '30%', width: '50%' */ resizeMode: 'cover' }]} />
        <VerifyButton text={'verify'} onPress={onVerifiedPressed} />
      </View>
      <View style={styles.right_side}>
        <Text style={styles.title}>We need to
          Verify your identity</Text>
        <Text style={styles.info}>We are required to verify your identity before you can use the application. Your information will be encrpyted and stored securely. </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    marginTop: '5%',
    backgroundColor: 'rgba(21, 161, 240, 0.47)',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  vCard: {
    marginTop: 20,
    width: '50%',
    height: '50%',
    marginBottom: 10,
  },

  left_side: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  right_side: {
    left: 170,
    top: -150
  },
  info: {
    fontSize: '14%',
    width: '50%',
    marginTop: 15,
  },
  title: {

    fontSize: 19,
    width: '50%',
    fontWeight: '500',
  }
})

export default VerificationCard