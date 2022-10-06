import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const VerifyButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#049C6B'
  },

  container: {
    borderColor: '#049C6B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8FFEB',
    width: '30%',
    padding: 5,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 34,
  },
})

export default VerifyButton