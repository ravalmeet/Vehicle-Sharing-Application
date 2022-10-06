import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B71F3',
    width: '90%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: 'white'
  }

});

export default CustomButton;