import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E4E2',
    width: '90%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,
  },

  input: {}

})

export default CustomInput