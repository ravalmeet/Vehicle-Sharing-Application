import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const TimeSelect = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: 'black'
  }

});

export default TimeSelect