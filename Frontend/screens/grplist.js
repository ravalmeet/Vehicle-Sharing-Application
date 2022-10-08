import { View, Text } from 'react-native'
import React from 'react'

const GrpList = ({ route }) => {
  return (
    <View>
      <Text>{route.params.paramKey}</Text>
    </View>
  )
}

export default GrpList