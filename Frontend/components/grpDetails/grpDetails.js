import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';



const GroupDetail = () => {

  const { height } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: '50%' }]}>
      <View style={styles.titleContainer}>
        <FontAwesome5 name="layer-group" size={26} color="black" />
        <Text style={styles.title}> Current Group Details</Text>
      </View>
      {/*  <GroupCard /> */}

    </View>
  )
}


const GroupCard = () => {
  return (
    <TouchableOpacity style={styles.grpmemberCard}>
      <View style={styles.logo}><Text>P</Text></View>
      <View>
        <Text style={styles.grpmemberName}>Golakiya Dhruval V</Text>
        <Text style={styles.grpmemberLoc}> Varachha</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  container: {
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#E5E4E2'
  },

  locationLogo: {
    fontSize: 20,

  },

  grpmemberName: {
    marginLeft: 20,
    fontSize: 18
  },

  grpmemberLoc: {
    marginLeft: 30,
    marginTop: 5
  },

  grpmemberCard: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: "white",
    width: '90%',
    height: '50%',
    borderRadius: 15,
    alignItems: 'center'
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

  titleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 30
  },

  title: {
    fontSize: 20,
    marginLeft: 10,
  }
})
export default GroupDetail