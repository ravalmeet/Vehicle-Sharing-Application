import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const JsonDate = () => {
  const PassList = require('../jsonFIles/passengerList.json')

  console.log(PassList);

  return (
    <Text></Text>
  )
}

export default JsonDate