import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/customInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/customButton/custom_button'



const NewpasswordScreeen = ({ navigation }) => {

  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')


  const onSubmitPressed = () => {
    console.warn("Password Changed")
  }


  const onBackToSignInPressed = () => {
    navigation.replace('LogScreen')
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput placeholder='Enter your verification code' value={code} setValue={setCode} />
          <CustomInput placeholder='Enter your new password' value={newPassword} setValue={setNewPassword} />
          <CustomButton text='Submit' onPress={onSubmitPressed} />
          <TouchableOpacity onPress={onBackToSignInPressed}><Text style={{ opacity: 0.7, fontSize: 15, marginTop: 5, }}>Back to Sign In</Text></TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    margin: 10,
    marginBottom: 25,

  }
})

export default NewpasswordScreeen