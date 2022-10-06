import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Logs } from 'expo'
import CustomInput from '../../components/customInput/customInput'
import { TapGestureHandler } from 'react-native-gesture-handler'
import CustomButton from '../../components/customButton/custom_button'
import logo from '../../images/SignUpImage.png'




const SigninScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');


  const { height } = useWindowDimensions();



  const onSignUpPressed = () => {
    console.warn("Sign Up")
  }

  const onForgotPasswordPressed = () => {
    console.warn("Password Changed")
  }
  const onCreateAccountPressed = () => {
    navigation.replace('SigninScreen')
  }



  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logo} resizeMode="contain" style={[styles.logo, { height: height * 0.4 }]} />

        <CustomInput placeholder='Name' value={name} setValue={setName} />
        <CustomInput placeholder='Email' value={username} setValue={setUsername} />
        <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder='Confirm password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
        <CustomButton text='Sign Up' onPress={onSignUpPressed} />
        {/*       <TouchableOpacity onPress={onCreateAccountPressed}><Text style={{ opacity: 0.7, fontSize: 10, marginTop: 10, }}>Back to Login scren </Text></TouchableOpacity> */}


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 0,
  },


  logo: {
    marginBottom: 20,
    width: '90%',
    Maxwidth: 100,
    Maxheight: 300,
  },
  containerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  }
})

export default SigninScreen;