import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const NotificationCard = () => {

  const { height } = useWindowDimensions();



  return (
    <View style={[styles.container, { height: height / 3 }]}>
      <View style={styles.logo}><Text>P</Text></View>
      <View>
        <Text style={styles.senderName}>Golakiya Dhruval V</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 15,
  },

  logo: {
    marginLeft: 15,
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  grpmemberName: {
    marginLeft: 20,
    fontSize: 18
  },



})
export default NotificationCard