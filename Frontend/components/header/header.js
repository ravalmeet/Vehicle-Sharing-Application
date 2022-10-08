import React from "react";
import { View, ScrollView, StyleSheet, Image, useWindowDimensions, TouchableOpacity, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HostScreen from "../../screens/hostcar_screen";
import { useNavigation } from '@react-navigation/native';
import MapView from "react-native-maps";
import GrpComplete from "../../screens/grpCompleteLoadingScree";

const Header = ({ onPressedOp }) => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();
  /* const onBack = () => {
    navigation.navigate(HostScreen)
  } */
  return (
    <View>
      <View style={[styles.header, { height: height * 0.07 }]}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons style={styles.icon} name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>

        <Text style={[{ fontSize: 20, }]}>Searching For Ride Mates</Text>
        <TouchableOpacity onPress={onPressedOp}>
          <Ionicons style={styles.icon} name="ios-arrow-up-sharp" size={24} color="#E5E4E2" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  icon: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  header: {
    position: 'sticky',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5E4E2',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default Header;